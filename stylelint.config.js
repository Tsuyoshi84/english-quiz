export default {
	extends: ['stylelint-config-standard', 'stylelint-config-html'],
	rules: {
		'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: 'global' }]
	}
};
