import React, { useState } from "react";
import "../style/SearchBar.css";

function SearchBar({ projects, setFilteredProjects }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterProjects(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      filterProjects(searchTerm);
    }
  };

  const filterProjects = (searchTerm) => {
    const filteredProjects = projects.filter(
      (project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(filteredProjects);
  };

  const resetFilteredProjects = () => {
    setFilteredProjects(projects);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Rechercher un projet, ex : Réseaux Sociaux"
        value={searchTerm}
        onChange={handleSearchTerm}
        onKeyDown={handleKeyDown}
        onInput={(e) => e.target.value.trim() === "" && resetFilteredProjects()}
      />
    </div>
  );
}

export default SearchBar;
