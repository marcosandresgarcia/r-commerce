import axios from 'axios';

export const fetchCompanyData = async (setCompany) => {
    try {
        const { data } = await axios.get('http://localhost:8001/company/');
        setCompany(data);
    } catch (error) {
        console.error('Error al obtener los datos de la compañía:', error);
    }
};