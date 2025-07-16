import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const projects = [
    {
      name: "Personal Finance Tracker",
      description: "An app to track income, expenses, and savings visually."
    },
    {
      name: "AI Learning Platform",
      description: "A platform to learn AI using interactive modules and quizzes."
    },
    {
      name: "E-commerce Dashboard",
      description: "A dashboard for admins to monitor and manage online sales."
    }
  ]
  return (
    <div className="ns-wrapper">
    {projects.map((project, index) => (
      <div key={index}>
        <h1 data-ns-test="project-name">{project.name}</h1>
        <h6 data-ns-test="project-description">{project.description}</h6>
      </div>
    ))}
    </div>
  )
}


export default App;
