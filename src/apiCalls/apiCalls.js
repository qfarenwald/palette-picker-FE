export const getProjects = () => {
  return fetch('http://palette-pick-be.herokuapp.com/api/v1/projects')
    .then(res => res.json())
}

export const getPalettes = () => {
  return fetch('http://palette-pick-be.herokuapp.com/api/v1/palettes')
    .then(res => res.json())
}

export const postPalette = async (newPalette) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newPalette),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(`http://palette-pick-be.herokuapp.com/api/v1/palettes`, options)
  const data = await response.json();
    return data
}

export const deletePalette = async (paletteId) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(`http://palette-pick-be.herokuapp.com/api/v1/palettes/${paletteId}`, options);
  return response
}

export const postProject = async (newProject) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newProject),
    headers: {
      'Content-Type': 'application/json'
    } 
  }
  const response = await fetch('http://palette-pick-be.herokuapp.com/api/v1/projects', options)
  const data = await response.json();
  console.log(`Project with an id of ${data} has been added.`)
  return data
}

export const deleteProject = async (projectId) => {
  console.log(projectId)
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(`http://palette-pick-be.herokuapp.com/api/v1/projects/${projectId}`, options)
  const data = await response.json()
  console.log(data)
  return data
}