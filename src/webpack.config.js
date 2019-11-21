{
  module: {
      rules: [{
              test: /\.md$/,
              use: [
                  {
                      loader: "html-loader"
                  },
                  {
                      loader: "markdown-loader",
                      options: {
                          /* your options here */
                      }
                  }
              ],
              test: /\.(png|jpe?g|gif)$/i,
                use: [
                {
                    loader: 'file-loader',
                },
            ],
        }]
  }
}