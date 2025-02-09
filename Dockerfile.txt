# Use Node.js official image as a parent image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the Next.js default port
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start"]
