import React from "react";
import "./style.css";
import ImageClickInfo from "./image_click_info";
const contentful = require('contentful')
const client = contentful.createClient({
    space: 'q77bwy72v1n8',
    accessToken: 'nkeWCevUXbtdGZHFRLV2HcK0E6xgVmcLwyiD-mYMKjE'
})
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [],
        }
    }
    componentDidMount() {
        client.getEntries({ content_type: 'section' })
            .then((response) => this.setState({ sections: response.items }))
            .catch(console.error);
    }
    render() {
        return (
            <div id="main-wrap">
                {this.state.sections.map((section, index) =>
                    <ImageClickInfo
                        image={section.fields.image.fields.file.url}
                        key={index}
                        points={section.fields.points}
                    />
                )}
            </div>
        )
    }
}
export default Main;