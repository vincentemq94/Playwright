# Using microsoft playwright image
FROM mcr.microsoft.com/playwright:focal

# Update the package list and install dependencies for Chrome
RUN apt-get update && apt-get install -y \
    wget \
    curl \
    ca-certificates \
    fonts-liberation \
    libappindicator3-1 \
    libxkbcommon0 \
    xdg-utils \
    --no-install-recommends

# Add Google's repository to get the latest Chrome
RUN curl -sSL https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -o google-chrome-stable_current_amd64.deb

# Install Chrome from the .deb package
RUN apt install -y ./google-chrome-stable_current_amd64.deb

# Clean up
RUN rm google-chrome-stable_current_amd64.deb

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to optimize Docker caching
COPY package*.json ./

# Install dependencies before copying the entire app
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose port 3000 (or whatever your app uses)
EXPOSE 3000

CMD ["sh", "-c", "npx playwright install && npm test"]
