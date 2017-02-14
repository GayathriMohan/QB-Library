entry: {
        app: 'src/app/app.component.ts'
    },

output: {
    filename: 'src/app/app.component.js'
},

rules:{
		{
		  test: /\.scss$/,
		  exclude: /node_modules/,
		  loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
		}
}
