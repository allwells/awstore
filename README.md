# Simple Online Bicycle Store

This project is a Simple Online Bicycle Store built using Next.js and Sanity, following a monorepo structure.

## Project Structure

The project utilizes a monorepo structure to manage the frontend application (built with Next.js) and the content management system (Sanity Studio) in a single repository.

```
├── store/         # Main Next.js application (Pages Router)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── pages/
│   │   │   └── api/
│   │   ├── styles/
│   │   ├── utils/
│   │   └── ...
├── store-studio/  # Sanity Studio for content and product management
│   ├── schemas/
│   ├── static/
│   └── ...
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── README.md
```

## Technologies Used

- **Frontend:**
  - [Next.js](https://nextjs.org/) (Pages Router): A React framework for building server-rendered and statically generated web applications.
  - [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
- **Content Management System (CMS):**
  - [Sanity](https://www.sanity.io/): A headless CMS used for managing product data, website content, and other assets.
- **Order Management & Notifications:**
  - [Airtable](https://www.airtable.com/): Used for managing customer orders and potentially triggering email notifications.
- **Monorepo Management:**
  - [pnpm](https://pnpm.io/): A package manager that efficiently handles dependencies in a monorepo setup.

## Setup and Installation

Follow these steps to set up and run the project locally:

1.  **Clone the repository:**

    ```bash
    git clone git@github.com:allwells/awstore.git
    cd awstore
    ```

2.  **Install dependencies:**
    Using pnpm workspaces:

    ```bash
    pnpm install
    ```

3.  **Set up Sanity Studio:**
    Navigate to the Sanity Studio directory:

    ```bash
    cd store-studio
    ```

4.  **Run Sanity Studio:**

    ```bash
    pnpm dev
    ```

    This will start the Sanity Studio development server, usually accessible at `http://localhost:3333`.

5.  **Set up the Next.js application:**
    Navigate back to the root directory and then to the Next.js application directory:

    ```bash
    cd store
    ```

6.  **Install Next.js application dependencies:**

    ```bash
    pnpm install
    ```

7.  **Configure Environment Variables:**
    Create a `.env.local` file in the `store` directory, copy the content of `.env.template` into `.env.local` and add the necessary environment variables. This will likely include your Sanity Project ID, Dataset, and API token, as well as your Airtable access token and base ID.

    ```markdown
    # Sanity CMS
    SANITY_API_VERSION=<your-sanity-api-version>
    SANITY_PROJECT_ID=<your-sanity-project-id>
    SANITY_DATASET=<your-sanity-dataset>
    SANITY_API_TOKEN=<your-sanity-api-token>

    # Airtable
    AIRTABLE_ACCESS_TOKEN=<your-airtable-access-token>
    AIRTABLE_BASE_ID=<your-airtable-base-id>
    ```

8.  **Run the Next.js application:**
    ```bash
    pnpm dev
    ```
    This will start the Next.js development server, usually accessible at `http://localhost:3000`.

## Important Notes

- **Sanity API Token:** Ensure your Sanity API token has the necessary permissions to read and potentially write data, depending on your application's needs. Keep this token secure and do not expose it on the client-side.
- **Airtable Access Token:** Similarly, keep your Airtable access token secure.
- **Schema Configuration:** Define your product and content schemas in the `store-studio/schemas` directory to match the data you want to manage in Sanity.
- **Frontend Data Fetching:** Implement data fetching in your Next.js application to retrieve product and content data from Sanity.
- **Order Handling:** Implement the logic to send order data to Airtable when a user completes a purchase.
- **Email Notifications:** Set up any email notification logic using the Airtable integration or another email service.
