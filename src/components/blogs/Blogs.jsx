import React from 'react'

const Blogs = () => {
  return (
   
      <div className="container mx-auto p-12 max-w-7xl bg-gray-100 mt-8 mb-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-orange-800">BlogPage</h1>
      </div>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What is an Access Token and Refresh Token?</h2>
          <p className="text-lg mb-4">
            An access token is a credential that is used to authenticate and authorize users for accessing resources
            on a server. It is typically short-lived and expires after a certain period. A refresh token is used to
            obtain a new access token once the original one expires without requiring the user to log in again.
            <br /><br />
            **How They Work:** When a user logs in, they receive both an access token and a refresh token. The access
            token is sent with each request to access protected resources. When the access token expires, the refresh
            token can be used to request a new access token.
            <br /><br />
            **Storage on Client-Side:** Access tokens are usually stored in memory or local storage, while refresh
            tokens are typically stored in HttpOnly cookies to reduce exposure to client-side scripts.
          </p>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Compare SQL and NoSQL Databases</h2>
          <p className="text-lg mb-4">
            **SQL Databases:**
            <ul className="list-disc list-inside ml-4">
              <li>Structured Query Language (SQL) is used to manage relational databases.</li>
              <li>Data is organized into tables with rows and columns.</li>
              <li>Schema is fixed and predefined.</li>
              <li>Examples: MySQL, PostgreSQL, SQLite.</li>
            </ul>
            <br />
            **NoSQL Databases:**
            <ul className="list-disc list-inside ml-4">
              <li>NoSQL databases handle unstructured or semi-structured data.</li>
              <li>Data is stored in various formats such as documents, key-value pairs, graphs, or wide-columns.</li>
              <li>Schema is flexible and can change over time.</li>
              <li>Examples: MongoDB, Cassandra, Redis.</li>
            </ul>
          </p>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What is Express.js and NestJS?</h2>
          <p className="text-lg mb-4">
            **Express.js:** Express.js is a minimal and flexible Node.js web application framework that provides a robust
            set of features for building web and mobile applications. It simplifies routing, middleware management, and
            HTTP request handling.
            <br /><br />
            **NestJS:** NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side
            applications. It is built with TypeScript and leverages concepts from Object-Oriented Programming (OOP),
            Functional Programming (FP), and Reactive Programming (RP). It integrates with various libraries and tools
            to create modular, maintainable applications.
          </p>
        </section>
  
        <section>
          <h2 className="text-2xl font-semibold mb-4">What is MongoDB Aggregate and How Does it Work?</h2>
          <p className="text-lg mb-4">
            MongoDB aggregate is a powerful framework for performing data aggregation operations such as filtering,
            grouping, sorting, and reshaping data. The aggregate framework uses a pipeline of stages where each stage
            transforms the data in some way.
            <br /><br />
            **How It Works:** The aggregation pipeline is a series of stages where each stage performs an operation on
            the data. Examples of stages include `$match` (filtering), `$group` (grouping), `$sort` (sorting), and
            `$project` (reshaping). Data flows through the pipeline, and the final result is the output of the last
            stage.
          </p>
        </section>
      </div>
    );
  };
  

export default Blogs