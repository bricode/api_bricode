'use strict';

const express = require('express');
const router = express.Router();
const Project = require('../schemas/projects.schema');


// get all projects
router.get('/projects', (req, res, next) => {
  Project.find({}, (err, projects) => {
    if(err) {
      console.error(err);

    }
    res.status(200).send(projects);
  })
})

// get one project
router.get('/projects/:projectId', (req, res, next) => {
  let projectId = req.params.projectId;
  Project.findById(projectId, (err, project) => {
    if(err) console.error(err);
    res.status(200).send({
      project
    })
  })
})


// save a project
router.post('/projects', (req, res, next) => {

  // se crea una instancia de Project
  let project = new Project();

  // se toman los parametros de la req
  let params = req.body;
  project.nameProject = params.nameProject;
  project.description = params.description;
  project.imageUrl = params.imageUrl;
  project.urlToSite = params.urlToSite;


  project.save((err, projectStored) => {
    if(err) console.error(err);
    res.status(200).send({
      project: projectStored
    })
  })
})


// delate one project
router.delete('/projects/:projectId', (req, res, next) => {
  let projectId = req.params.projectId;
  Project.findByIdAndRemove(projectId, (err, projectDeleted) => {
    if(err) console.error(err);
    res.status(200).send({
      projectDeleted
    })
  })
})

// update a project
router.put('/projects/:projectId', (req, res, next) => {
  let projectId = req.params.projectId;
  let body = req.body;
  Project.findByIdAndUpdate(projectId, body, (err, projectUpdated) => {
    if(err) console.error(err);
    res.status(200).send({
      project: projectUpdated
    })
  })
})


module.exports = router;
