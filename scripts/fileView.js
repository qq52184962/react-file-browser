import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { FileViewHeader } from './fileViewHeader';
import { FileViewHeaderPath } from './fileViewHeaderPath';
import { FilePanel } from './filePanel';
import { store } from './FileStore';

@observer
export class FileView extends React.Component {
    constructor(props) {
        super(props);
        store.listDirectoryFiles('/');
    }
    
    render() {
        return (
            <div className='f-panel'>
                <FileViewHeaderPath path={store.currentPath}/>
                <FilePanel directories={store.directories} files={store.files}/>
            </div>
        );
    }
} 
