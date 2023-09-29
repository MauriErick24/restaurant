import axios from 'axios';

const getIpAddress = async () => {
  try {
    const response = await axios.get('https://ipinfo.io/json');
    const { ip } = response.data;
    return ip;
  } catch (error) {
    console.error('Error al obtener la dirección IP:', error);
    return null;
  }
};

export default getIpAddress;
