import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Navbar from "../components/Navbar";
import $ from "jquery";
import Pikaday from "pikaday";
import baguetteBox from "baguettebox.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "pikaday/css/pikaday.css";
import "baguettebox.js/dist/baguetteBox.min.css";
import "../assets/css/Hero-Carousel-images.css";
import "../assets/css/Team-icons.css";

const Project = () => {
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem("projects");
    return savedProjects
      ? JSON.parse(savedProjects)
      : [
          {
            id: 1,
            title: "Urban Deca Homes Ortigas",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.",
            image: require("../assets/image/ortigas-site-wide.png"),
          },
          {
            id: 2,
            title: "Urban Deca Homes Manila",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.",
            image: require("../assets/image/manila-site.webp"),
          },
          {
            id: 3,
            title: "Urban Deca Homes Commonwealth",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.",
            image: require("../assets/image/litex-site.png"),
          },
          {
            id: 4,
            title: "Deca Tower Cubao",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna.",
            image: require("../assets/image/cubao-site.jpg"),
          },
        ];
  });

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const addOrUpdateProject = () => {
    if (!newProject.title || !newProject.description || !newProject.image) {
      alert("All fields are required.");
      return;
    }

    if (newProject.id) {
      setProjects(
        projects.map((project) =>
          project.id === newProject.id ? newProject : project
        )
      );
    } else {
      setProjects([...projects, { ...newProject, id: projects.length + 1 }]);
    }
    setNewProject({ title: "", description: "", image: "" });
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const editProject = (id) => {
    const project = projects.find((project) => project.id === id);
    setNewProject(project);
  };

  const resetProjects = () => {
    localStorage.removeItem("projects");
    window.location.reload();
  };

  return (
    <React.Fragment>
      <Navbar /> {/* Use the Navbar component */}
      <main className="page">
        <section className="portfolio-block projects-cards animated-section">
          <div className="container">
            <div className="heading mb-5">
              <h2>PROJECTS</h2>
              {/*<button
                type="button"
                className="btn btn-danger"
                onClick={resetProjects}
              >
                Reset Projects
              </button> */}
            </div>
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-4">
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Title"
                    value={newProject.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Description"
                    value={newProject.description}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    name="image"
                    className="form-control"
                    placeholder="Image URL"
                    value={newProject.image}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-2 text-center">
                  <button 
                    type="button"
                    className="btn btn-warning"
                    style={{ color: "white", width: "100%" }}
                    onClick={addOrUpdateProject}
                  >
                    {newProject.id ? "Update Project" : "Add Project"}
                  </button>
                </div>
              </div>
            </div>
            <div className="container">
            <div className="row">
              {projects.map((project) => (
                <div className="col-md-6 col-lg-6" key={project.id}>
                  <div className="card border-0">
                    <img
                      className="card-img-top scale-on-hover"
                      src={project.image}
                      alt="Card Image"
                      height="280px"
                      width="100px"
                    />
                    <div className="card-body">
                      <h6>{project.title}</h6>
                      <p className="text-muted card-text">
                        {project.description}
                      </p>
                      <div className="mt-3 d-flex justify-content-center gap-2">
                        <button
                          className="btn btn-warning"
                          onClick={() => editProject(project.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-dark"
                          onClick={() => deleteProject(project.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="page-footer">
        <div className="container">
          <div className="links">
            <a href="">About Us</a>
            <a href="">Contact</a>
            <a href="">Projects</a>
          </div>
          <div className="social-icons">
            <a href="">
              <i className="icon ion-social-facebook"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-instagram-outline"></i>
            </a>
            <a href="#">
              <i className="icon ion-social-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Project;
