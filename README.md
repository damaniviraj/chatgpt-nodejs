# chatgpt-nodejs

A simple Openai nodeJs project.

In order to run the project follow the steps 

Firstly you have to signup on https://platform.openai.com/

After singup, you need to create new secret key. URL = https://platform.openai.com/account/api-keys 

1. git clone <*git-clone-url*>
2. cd chatgpt-nodejs
3. npm install 
4. create and .env file and add the openai api key i.e OPENAI_API_KEY=<*your-api-key*>
5. run the project using node index.js or nodemon(if you have nodemon globally installed.)

In order to test the API 

URL : http://<*your-server-domain*>:4400/ai <br>
Method : POST <br>
Body : 
{
  "qn": <*your-qn-here*>
}
