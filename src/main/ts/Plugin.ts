import Noneditable from './core/Noneditable';
import Grid from './core/Grid';
import Row from './core/Row';
import Column from './core/Column';
import { Editor } from 'tinymce';

declare const tinymce: any;

const setup = (editor: Editor, url: string) => {
    editor.contentCSS.push(url + '/style.css');
    /* tslint:disable:no-unused-variable */
    const noneditable = new Noneditable(editor);
    const row = new Row(editor);
    const column = new Column(editor);
    const grid = new Grid(editor);
};

export default () => {
    tinymce.PluginManager.add('grid', setup);
    tinymce.PluginManager.requireLangPack('grid');
};
