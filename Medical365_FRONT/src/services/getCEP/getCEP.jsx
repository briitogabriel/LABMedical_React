
const API_VIACEP = `http://viacep.com.br/ws/CEP/json/`

const GetCEP = async (cep) => {
  const response = await fetch(API_VIACEP.replace('CEP', cep.replace("-", "").trim()));
  const data = await response.json();
  return data;
}

export default GetCEP;