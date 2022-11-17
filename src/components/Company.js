import api from '../api/api-baseurl';
import {useEffect,useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Company = () => {
    const [ companies, setCompanies ] = useState([]);
    const retrieveCompanies = async () => {
        const response = await api.get("company/all");
        console.log(response.data)
        return response.data;
      };
      useEffect(() => {
        const getAllCompanies = async () => {
          const allCompanies = await retrieveCompanies();
          if (allCompanies) setCompanies(allCompanies);
        };
    
        getAllCompanies();
      }, []);
  return (
    <div className='container mt-5'>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="right">ID#</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Website</TableCell>
          <TableCell align="right">Sector</TableCell>
          <TableCell align="right">Email</TableCell>
          <TableCell align="right">Contact</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {companies.map((row) => (
          <TableRow
            key={row.company_id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="right">{row.company_id}</TableCell>
            <TableCell align="right">{row.name? row.name : 'Empty'}</TableCell>
            <TableCell align="right">{row.website? row.website : 'Empty'}</TableCell>
            <TableCell align="right">{row.sector? row.sector : 'Empty'}</TableCell>
            <TableCell align="right">{row.email? row.email : 'Empty'}</TableCell>
            <TableCell align="right">{row.contact_number1? row.contact_number1 : 'Empty'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  );
}

export default Company;

