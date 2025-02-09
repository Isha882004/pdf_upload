# 'PDF GPT' --Backend

# About 

The backend system currently stores uploaded documents within the File Management system. It utilizes Langchain and OpenAI models to enable the system to answer questions related to the documents, along with providing contextual chat history associated with each document.


# Setting up the Project

```bash
 cd backend
```
* Create a virtual environment
 ```bash
 python -m venv venv
 ```
* Activate the virtual environment (For Windows)
 ```bash
 .\venv\Scripts\activate  
 ``` 

* Install the dependencies : 
 ```bash
 pip install -r requirements.txt
 ```
* Add your own OpenAPI key in the .env file for processing the data in the pdf

* To start running project locally:
```bash
  uvicorn api.app:app 
 ```
* The server would be up and running on http://localhost:8000

# Application Architecture

The backend system comprises three primary folders: api, engine, and docs. Additionally, it includes configuration files such as data.db (SQLite database), .env files, requirements.txt, and .gitignore files.

Within the api folder, there is a standard structure containing models and routers subfolders, housing entity files for respective models and routers. The app.py serves as the main file for server initialization. Additionally, there are configuration and database files for streamlined environment switching and database configuration and initiation, respectively.

The engine is responsible for processing documents and providing answers based on contextual chat history. The main.py contains the processing logic and returns answers while ensuring that the question-answer pairs are appended to the chat history. utils.py includes auxiliary functions necessary for the engine's operation.

The docs folder serves as the repository for all files, which will subsequently be processed by the engine.



