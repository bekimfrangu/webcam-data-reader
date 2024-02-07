### Driver's License Reader Web Application
# Overview
    This project is a web application that allows users to extract data from a driver's license using their device's webcam. The extracted data, including the user's full name, address, and driver's license issuance and expiration dates, is displayed in an accessible and user-friendly format.

# Architecture
    The project follows a client-server architecture:

    Client: The client-side code is built using React.js with Next.js framework. It handles the user interface, webcam access, and interaction with the Tesseract.js library for optical character recognition (OCR).

    Server: Since the application is entirely client-side and runs in the browser, there is no server-side code. All processing, including image recognition, is done locally within the client's browser.

# Technologies Used
# Frontend:
    React.js
    Next.js
    Tesseract.js
    Tailwind CSS

# Development Tools:
    TypeScript
    Vercel (for deployment)

# Obstacles Encountered
    Accessing Webcam: Implementing logic to access the webcam stream and capture frames required handling browser compatibility issues and ensuring proper permissions were granted by the user.

    Image Recognition: Integrating Tesseract.js for OCR presented challenges in configuring and processing images captured from the webcam. Ensuring accurate text extraction and handling various license formats required experimentation and fine-tuning.

# Assumptions
    During development, the following assumptions were made:

    Webcam Availability: It was assumed that users accessing the application have a device with a webcam and grant necessary permissions to access it.

    Driver's License Format: The application assumes a standard driver's license format for text extraction. It may not accurately process non-standard or heavily stylized licenses.

    Local Processing: All processing, including image recognition, is performed locally within the client's browser. No server-side processing or external APIs are utilized.

# Deployment
    The application is deployed using Vercel's platform. The deployment process is handled using the Vercel CLI, which automates the build and deployment of the Next.js application.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

