import Controller from '@ember/controller';

export default Controller.extend({
  sampleText: `
# Header h1
Regular text line1
Regular text line2

## Header h2
* item1
* item2

### Header h3
\`code1\`
\`\`\`js
  const code2 = 'line1';
  var line2 = 1;
  line2++;
\`\`\`
`,
  options: {breaks: true}
});
