import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectsList = [
    {
      title: 'Project 1',
      description: 'Description of Project 1.',
      demoLink: 'https://example.com/demo1',
      codeLink: 'https://github.com/yourusername/project1'
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
      demoLink: 'https://example.com/demo2',
      codeLink: 'https://github.com/yourusername/project2'
    },
    // Add more projects as needed
  ];
}

