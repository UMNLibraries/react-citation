import React from 'react'
import renderer from 'react-test-renderer'
import Details from '../src/cite-details'

describe('Details Test', () => {
  it("renders a citation", function(){  
    const fields = 
            [
              {
                label: "Some Field",
                delimiter: ', ',
                field_values: [
                  {text: "Daemon", url: "https://www.amazon.com/DAEMON-Daniel-Suarez/dp/0451228731"}
                ]
              },
              {
                label: "Title",
                delimiter: ', ',
                field_values: [
                  {text: "Snow Crash", url: "https://www.amazon.com/Snow-Crash-Neal-Stephenson/dp/0553380958/ref=sr_1_1?s=books&ie=UTF8&qid=1478114241&sr=1-1&keywords=snowcrash"},
                  {text: "Ender's Game"}
                ]
              }
            ]
    let component = renderer.create(<Details fields={fields} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})