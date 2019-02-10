const shaizeiBabelPreset = (context, options = {}) => {

  const env = process.env.BABEL_ENV || process.env.NODE_ENV;

  const plugins = [
    [
      require('babel-plugin-emotion'),
      {
        sourceMap: true,
        autoLabel: env === 'development',
        labelFormat: '[local]',
        cssPropOptimization: true,
      }
    ],
    [
      require('@babel/plugin-proposal-class-properties'),
      {
        loose: false,
      },  
    ],
    [
      require('@babel/plugin-proposal-object-rest-spread'),
      {
        loose: false,
        useBuiltIns: false,
      },  
    ],
    require('@babel/plugin-syntax-dynamic-import'),
  ];

  const presets = [
    [
      require('@babel/preset-react'),
      {
        pragma: 'React.createElement',
        pragmaFrag: 'React.Fragment',
        useBuiltIns: false,
        development: env === 'development' ? true : false,
        throwIfNamespace: true,
      },  
    ],
    [
      require('@babel/preset-env'),
      {
        targets: ['> 5%'],
        spec: false,
        loose: false,
        modules: false,
        debug: false,
        include: [],
        exclude: [],
        useBuiltIns: 'usage',
        forceAllTransforms: false,
        configPath: process.cwd(),
        ignoreBrowserslistConfig: true,
        shippedProposals: true,  
      }
    ],
  ];

  if (options.typescript && options.typescript === true) {
    presets.push(require('@babel/preset-typescript'))
  }

  if (env === 'development') {
    plugins.push('react-hot-loader/babel')
  }

  if (env === 'production') {
    plugins.push(
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: 2,
          helpers: true,
          regenerator: true,
          useESModule: true,
        }
      ],
      [
        'babel-plugin-transform-react-remove-prop-types',
        {
          mode: 'remove',
          removeImport: true,
          ignoreFileNames: ['node_modules'],
        },    
      ]
    )
  }

  return {
    plugins,
    presets
  }
};

module.exports = shaizeiBabelPreset;
