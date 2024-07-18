import React, { useState } from 'react';
import ReactLogo from '../../../src/Image/react-logo.png';
import AngularLogo from '../../../src/Image/angular-logo.png';
import VueJsLogo from '../../../src/Image/vuejs-logo.png';
import JavaScriptLogo from '../../../src/Image/javascript-logo.png'; // Example for other frontend technology
import JavaLogo from '../../../src/Image/java-logo.png'; // Added Java logo
import DotNetLogo from '../../../src/Image/dotnet-logo.png'; // Added .NET logo
import ReactNativeLogo from '../../../src/Image/reactnative-logo.png'; // Added React Native logo
import NodeJsLogo from '../../../src/Image/nodejs-logo.png';
import ExpressJsLogo from '../../../src/Image/expressjs-logo.png';
import DjangoLogo from '../../../src/Image/django-logo.png';
import PHPLogo from '../../../src/Image/php-logo.png'; // Added PHP logo
import MongoDBLogo from '../../../src/Image/mongodb-logo.png';
import MySQLLogo from '../../../src/Image/mysql-logo.png';
import PostgreSQLLogo from '../../../src/Image/postgresql-logo.png';
import AWSLogo from '../../../src/Image/aws-logo.png';
import AzureLogo from '../../../src/Image/azure-logo.png';
import GoogleCloudLogo from '../../../src/Image/google-cloud-logo.png';
import DockerLogo from '../../../src/Image/docker-logo.png';
import KubernetesLogo from '../../../src/Image/kubernetes-logo.png';
import JenkinsLogo from '../../../src/Image/jenkins-logo.png';

function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState('frontend'); // Set default category to 'frontend'

  // List of tech stacks for each category with logos
  const techStacks = {
    frontend: [
      { name: 'React', logo: ReactLogo },
      { name: 'Angular', logo: AngularLogo },
      { name: 'Vue.js', logo: VueJsLogo },
      { name: 'JavaScript', logo: JavaScriptLogo }, // Added another frontend technology
      { name: '.NET', logo: DotNetLogo }, // Added .NET
      { name: 'React Native', logo: ReactNativeLogo }, // Added React Native
    ],
    backend: [
      { name: 'Node.js', logo: NodeJsLogo },
      { name: 'Express.js', logo: ExpressJsLogo },
      { name: 'Django', logo: DjangoLogo },
      { name: 'PHP', logo: PHPLogo }, // Added PHP
      { name: 'Java', logo: JavaLogo }, // Added Java
    ],
    database: [
      { name: 'MongoDB', logo: MongoDBLogo },
      { name: 'MySQL', logo: MySQLLogo },
      { name: 'PostgreSQL', logo: PostgreSQLLogo },
    ],
    cloudTesting: [
      { name: 'AWS', logo: AWSLogo },
      { name: 'Azure', logo: AzureLogo },
      { name: 'Google Cloud', logo: GoogleCloudLogo },
    ],
    devops: [
      { name: 'Docker', logo: DockerLogo },
      { name: 'Kubernetes', logo: KubernetesLogo },
      { name: 'Jenkins', logo: JenkinsLogo },
    ],
    // Add more categories and tech stacks as needed
  };

  return (
    <div>
      <div className="text-lg md:text-2xl lg:text-3xl flex flex-col space-y-2 items-center my-4">
        <span className="block w-12 h-1 bg-blue-700" />
        <p>Our</p>
        <h3 className="font-bold">Tech Stack</h3>
      </div>

      <div className="flex flex-wrap justify-center space-x-2 md:space-x-4">
        {/* Category buttons */}
        {Object.keys(techStacks).map(category => (
          <button
            key={category}
            className={`px-2 py-1 md:px-4 md:py-2 rounded-md ${
              selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Tech stack list */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 mt-4 lg:px-5 py-0">
        {techStacks[selectedCategory].map((tech, index) => (
          <div key={index} className="p-2 rounded-md">
            <img src={tech.logo} alt={tech.name} className="h-12 mx-auto mb-2 object-contain" style={{ maxWidth: '80px' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
