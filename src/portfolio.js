
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://real-ali.github.io',
  title: 'AH.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ali Hosseini',
  role: 'Software Engineer',
  description:'A student at a private university in Kabul, studying fourth-generation advanced programming languages.More interest in working on the development of superior software and the invention of the newest and best software in the world.And about my goal:Somehow I think that if I say I have a goal, I may think it is wrong, because I am still learning and I have not yet thought about what the purpose of this learning is.But I would like to understand everything better in terms of technology.Most of my focus is on building artificial intelligence.',
  resume: 'https://example.com',
  social: {
    github: 'https://github.com/real-ali',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:'',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Git',
  'dart',
  'flutter',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 's.alisinahussaini313@gmail.com',
}

export { header, about, projects, skills, contact }
