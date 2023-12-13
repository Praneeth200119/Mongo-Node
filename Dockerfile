# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /server

# Copy package.json and package-lock.json to /app
COPY package.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port 3000
EXPOSE 3000

# Define environment variable
# ENV NODE_ENV=production

# Command to run the application
CMD ["node", "server.js"]
