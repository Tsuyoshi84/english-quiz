# Use the official Node.js image as a base
FROM node:22

# Install pnpm
RUN npm install -g pnpm@10.2.1

# Set the working directory
WORKDIR /workspace

# Copy the current directory contents into the container
COPY . /workspace
