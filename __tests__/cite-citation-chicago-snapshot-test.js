import React from 'react'
import renderer from 'react-test-renderer'
import CitationChicago from '../src/cite-citation-chicago'

describe('CitationChicago Tests', () => {
  it("renders a citation", function(){  

    const fields = {
      creator: 'Fred',
      creation_date: '09/01/2001',
      title: 'Fred and his dog',
      current_date: 'November 8, 2017',
      contributing_organization: 'Fred and co',
      url: 'http://www.example.com/fred'
    }

    let component = renderer.create(<CitationChicago field_values={fields} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})