Sure, I'll create the 

req.md

 file for you. Here is the content for the 

req.md

 file:

```markdown
# API Request Documentation

## Base URL
```
http://localhost:5000
```

## Endpoints

### 1. Get Fitness Videos Sorted by Views
- **Endpoint:** `/fitness-videos`
- **Method:** `POST`
- **Description:** Fetches fitness videos from YouTube and sorts them by view count.
- **Request Body:**
  ```json
  {
    "data": "fitness"
  }
  ```
- **Curl Command:**
  ```sh
  curl -X POST http://localhost:5000/fitness-videos -H "Content-Type: application/json" -d '{"data": "fitness"}'
  ```

### 2. Reddit Analysis
- **Endpoint:** `/reddit-analysis`
- **Method:** `POST`
- **Description:** Analyzes Reddit posts for a given niche and competitor.
- **Request Body:**
  ```json
  {
    "niche": "Fitness apps",
    "competitor": "Nike Training Club"
  }
  ```
- **Curl Command:**
  ```sh
  curl -X POST http://localhost:5000/reddit-analysis -H "Content-Type: application/json" -d '{"niche": "Fitness apps", "competitor": "Nike Training Club"}'
  ```

### 3. Quora Scrape
- **Endpoint:** `/quora-scrape`
- **Method:** `POST`
- **Description:** Scrapes Quora for answers related to the given input data.
- **Request Body:**
  ```json
  {
    "data": "Top challenges in fitness for health and wellness"
  }
  ```
- **Curl Command:**
  ```sh
  curl -X POST http://localhost:5000/quora-scrape -H "Content-Type: application/json" -d '{"data": "Top challenges in fitness for health and wellness"}'
  ```

## Example Requests

### 1. Get Fitness Videos Sorted by Views
```sh
curl -X POST http://localhost:5000/fitness-videos -H "Content-Type: application/json" -d '{"data": "fitness"}'
```

### 2. Reddit Analysis
```sh
curl -X POST http://localhost:5000/reddit-analysis -H "Content-Type: application/json" -d '{"niche": "Fitness apps", "competitor": "Nike Training Club"}'
```

### 3. Quora Scrape
```sh
curl -X POST http://localhost:5000/quora-scrape -H "Content-Type: application/json" -d '{"data": "Top challenges in fitness for health and wellness"}'
```
```

To create this file in your project, you can use the following steps:

1. Open your project directory.
2. Create a new file named 

req.md

.
3. Copy and paste the above content into the 

req.md

 file.
4. Save the file.

Alternatively, you can use the following Node.js script to create the file programmatically:

```javascript
const fs = require('fs');

const content = `
# API Request Documentation

## Base URL
\`\`\`
http://localhost:5000
\`\`\`

## Endpoints

### 1. Get Fitness Videos Sorted by Views
- **Endpoint:** \`/fitness-videos\`
- **Method:** \`POST\`
- **Description:** Fetches fitness videos from YouTube and sorts them by view count.
- **Request Body:**
  \`\`\`json
  {
    "data": "fitness"
  }
  \`\`\`
- **Curl Command:**
  \`\`\`sh
  curl -X POST http://localhost:5000/fitness-videos -H "Content-Type: application/json" -d '{"data": "fitness"}'
  \`\`\`

### 2. Reddit Analysis
- **Endpoint:** \`/reddit-analysis\`
- **Method:** \`POST\`
- **Description:** Analyzes Reddit posts for a given niche and competitor.
- **Request Body:**
  \`\`\`json
  {
    "niche": "Fitness apps",
    "competitor": "Nike Training Club"
  }
  \`\`\`
- **Curl Command:**
  \`\`\`sh
  curl -X POST http://localhost:5000/reddit-analysis -H "Content-Type: application/json" -d '{"niche": "Fitness apps", "competitor": "Nike Training Club"}'
  \`\`\`

### 3. Quora Scrape
- **Endpoint:** \`/quora-scrape\`
- **Method:** \`POST\`
- **Description:** Scrapes Quora for answers related to the given input data.
- **Request Body:**
  \`\`\`json
  {
    "data": "Top challenges in fitness for health and wellness"
  }
  \`\`\`
- **Curl Command:**
  \`\`\`sh
  curl -X POST http://localhost:5000/quora-scrape -H "Content-Type: application/json" -d '{"data": "Top challenges in fitness for health and wellness"}'
  \`\`\`

## Example Requests

### 1. Get Fitness Videos Sorted by Views
\`\`\`sh
curl -X POST http://localhost:5000/fitness-videos -H "Content-Type: application/json" -d '{"data": "fitness"}'
\`\`\`

### 2. Reddit Analysis
\`\`\`sh
curl -X POST http://localhost:5000/reddit-analysis -H "Content-Type: application/json" -d '{"niche": "Fitness apps", "competitor": "Nike Training Club"}'
\`\`\`

### 3. Quora Scrape
\`\`\`sh
curl -X POST http://localhost:5000/quora-scrape -H "Content-Type: application/json" -d '{"data": "Top challenges in fitness for health and wellness"}'
\`\`\`
`;

fs.writeFileSync('req.md', content.trim());
console.log('req.md file has been created');
```

Run this script in your project directory to create the 

req.md

 file.