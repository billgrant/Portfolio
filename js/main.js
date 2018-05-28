import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Automation",
    'image': {
      'desc': "Screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': `"changehostnames.py"`
    }
  },
  {
    'title': "Cloud Architecture",
    'image': {
      'desc': "Screenshot of a project involving cloud",
      'src': "images/example2.png",
      'comment': `"VPC Peering"`
    }
  },
  {
    'title': "infrastructure",
    'image': {
      'desc': "Screenshot of a project involving infrastructure",
      'src': "images/example3.png",
      'comment': `"Singapore"`
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));
