const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const editorStyle = {
	backgroundColor: '#0065AF',
	color: '#fff',
	padding: '20px',
	border: '4px solid #000',
	textAlign: 'center'
}

const frontStyle = {
	backgroundColor: '#0065AF',
	color: '#fff',
	padding: '20px',
	border: '2px solid #000',
	textAlign: 'center'
}

// Plugin name, icon, category
registerBlockType( 'basic-custom-blocks/quick-info-block', {
	title: __( 'My WP Block'),
	icon: 'visibility',
	category: 'layout',
	// used in editor
	edit() {
		return <div style={ editorStyle }><img width = "100%" src = "https://bartlettdarryl.com/ely-fireworks.jpg"></img><p>Bonfire Night in Ely</p></div>;
	},
	// used in the frontend
	save() {
		return <div style={ frontStyle }><img width = "100%" src = "https://bartlettdarryl.com/ely-fireworks.jpg"></img><p>Bonfire Night in Ely</p></div>;
	}
});