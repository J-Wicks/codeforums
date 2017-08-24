import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {shallow} from 'enzyme';
import sinonChai from 'sinon-chai';
import faker from 'faker';
import Thread from '../browser/thread.js';

chai.use(chaiEnzyme());
chai.use(sinonChai);

const createPosts = (num) => {
  let posts = Array(num).fill('');
  posts = posts.map((post) => {
    return {
      content: faker.lorem.paragraph(),
      date: faker.date.recent(),
    };
  });
  return posts;
};

const createThread = () => {
  return {
    topic: faker.lorem.word(),
    // name:,
    content: faker.lorem.paragraph(),
    posts: createPosts(4),
    user: {name: faker.internet.userName(), email: faker.internet.email()},
  };
};

describe('React Tests ', () => {
  let fakeThread, threadRender

  beforeEach(() => {
    fakeThread = createThread();

    threadRender = shallow(<Thread thread={fakeThread} />)
    console.log(threadRender)
  })

  
  describe('Thread Component', () => {
    it('includes thread topic as <h1>', () => {
      expect(threadRender.find('h1')).to.have.html(`<h1> ${fakeThread.topic} </h1>`)
    })
  })

  describe('Thread Component two' , () => {
    it('includes thread name as <h2>', () => {
      expect(threadRender.find('h2')).to.have.html(`<h2> ${fakeThread.user.name} </h2>`)
    })
  })

});

















