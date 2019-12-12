import React from 'react';
import { ProjectForm } from './ProjectForm';
import { shallow } from 'enzyme';

describe('ProjectForm', () => {
  let wrapper;
  beforeEach(() => {
    const projects = [{ id: 20, name: 'Fall Colors' }, { id: 21, name: 'Ocean Vibes' }, { id: 22, name: 'Seeing Red' }];
    const palettes = [
      { id: 6, name: 'Pal1', projects_id: 20, color1: '#baddc3', color2: '#ff6767', color3: '#ffe596', color4: '#b3e6ff', color5: '#632ad7' },
      { id: 7, name: 'Pal2', projects_id: 20, color1: '#ab7146', color2: '#b3e6ff', color3: '#41406d', color4: '#b3e66tr', color5: '#41406d' },
      { id: 8, name: 'Pal3', projects_id: 22, color1: '#993f42', color2: '#d8ac97', color3: '#4e6cc4', color4: '#b4r35', color5: '#41406d' }
    ]
    wrapper = shallow(<ProjectForm
      projects={projects}
      palettes={palettes}
      selectPalette={jest.fn()}
      hover={false}
    />)
  });
  it('should match the snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update project name in state when handleChange is called', () => {
    const mockEvent = {
      preventDefault: jest.fn(),
      target: {
        value: 'Some Fall Stuff'
      }
    }
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('newProjName')).toEqual('Some Fall Stuff')
  })

  it('should remove a palette by id from state when removePalette is called', () => {
    const origPalettes = wrapper.state('palettes');
    expect(origPalettes.length).toEqual(3);
    wrapper.instance().removePalette(6);
    const expectedPalettes = wrapper.state('palettes');
    expect(expectedPalettes.length).toEqual(2);
  })

  it('should remove a project by id from state when removeProject is called', () => {
    const origProjects = wrapper.state('projects');
    expect(origProjects.length).toEqual(3);
    wrapper.instance().removeProject(20);
    const expectedProjects = wrapper.state('projects');
    expect(expectedProjects.length).toEqual(2);
  })

  it('should submit a new project when submitProject is called', () => {
    wrapper.setState({newProjName: 'Fall Shtuff'})
    wrapper.instance().submitProject()
    expect(wrapper.state('newProjName')).toEqual('Fall Shtuff')
    expect(wrapper.state('projects').length).toEqual(3)
  });
});