FROM node:12.16.1
# Set the working directory to /server
WORKDIR /server
# copy package.json into the container at /client
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
# install dependencies
RUN npm i
#RUN npm i -g nodemon 
RUN npm install sqlite3 --build-from-source
# Make port 3001 available to the world outside this container
EXPOSE 3001
# Run the app when the container launches
CMD ["npm", "run", "start"]