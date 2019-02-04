import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <h3>name:{props.repos.name}</h3>
    <h3>{props.repos.description}</h3>
    <h3>{props.repos.url}</h3>
    <h3>{props.repos.forks}</h3>
    <h3>{props.repos.id}</h3>

  </div>
)

export default RepoList;