# Use the official Node.js LTS image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your user management service will run on (default example: 5000)
EXPOSE 1000

# Start the application
CMD ["npm", "start"]
