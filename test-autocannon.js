const { exec } = require('child_process');
const axios = require('axios');
require('dotenv').config();

async function run() {
  try {
    const baseURL = process.env.BASE_URL || 'http://localhost:3000';
    const loginURL = `${baseURL}/auth/login`;
    const teamsURL = `${baseURL}/movies/popular`;

    const body = {
      username: 'roncon',
      password: '9638527',
    };

     JWT
    const loginResponse = await axios.post(loginURL, body);
    const token = loginResponse.data.access_token;

    
    const autocannonCommand = `autocannon -c 10 -d 10 --renderStatusCodes --latency --debug --warmup 1:2 -H "Authorization: Bearer ${token}" ${teamsURL}`;

    
    exec(autocannonCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro durante a execução do Autocannon: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`Resultado do teste de carga:\n${stdout}`);
    });
  } catch (error) {
    console.error('Erro durante a execução:', error);
  }
}

run();
