import { helper } from '@ember/component/helper';
import markdownit from 'markdown-it';
import {htmlSafe} from '@ember/string';
import {isEmpty} from '@ember/utils';

export function markdownHtml(params, hash) {
  if (isEmpty(params)) {
    return '';
  }

  let options = hash.options || {};

  let md = markdownit(options);

  if ('plugins' in hash) {
    hash.plugins.forEach( (plugin) => {
      md = md.use(plugin);
    });
  }
  return htmlSafe(md.render(params[0]));
}

export default helper(markdownHtml);
