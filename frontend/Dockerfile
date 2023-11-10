# Use the same Node.js LTS version as the backend for consistency
FROM node:16-alpine as build-stage

# Set the working directory in the Docker container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to Docker environment
COPY package*.json ./

# Install all the dependencies using the CI command to use the lock file
RUN npm ci

# Copy the rest of the codebase into the container
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the app using nginx
FROM nginx:stable-alpine as production-stage

# Copy the build artifacts from the previous stage into the serving directory of nginx
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# Best practice: run nginx as a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
#USER appuser -- leaving the commented out is not good for security and should be addressed later.

# Define the command to run your app using CMD which defines your runtime
CMD ["nginx", "-g", "daemon off;"]
