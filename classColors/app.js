////////////////////////////////////////////////////////////////////////////////////////////
// factory functions 
////////////////////////////////////////////////////////////////////////////////////////////
function ColorFactory(r,g,b) {
    const color = {
        r: r,
        g: g,
        b: b,
        rgbValues() {
            const { r, g, b } = this;
            return `${r}, ${g}, ${b}`
        },
        rgbString() {
            return `rgb(${this.rgbValues()})`
        },
        transparency(a=1) {
            if (a > 1 || a < 0) {
                return console.warn('please use an alpha channel between 0 and 1')
            }
            return `rgba(${this.rgbValues()}, ${a})`
        },
        hexString() {
            const hexi = ['0', '1', '2','3','4','5','6','7','8','9','A','B', 'C', 'D', 'E', 'F']
            const { r, g, b } = this;
            function helper (value) {
                if (value === 0) {
                    return '00'
                }
                let hex1, hex2;
                hex1 = Math.floor(value / 16)
                hex2 = 16 * ((value / 16) - hex1)
                return hexi[hex1] + hexi[hex2]
            }
            let hexStr = '';
            for (let color of [r,g,b]) {
                hexStr += helper(color)
            }
            return `#${hexStr}`;
        },
        hslString() {
            let { r, g, b } = this;
            // Make r, g, and b fractions of 1
            r /= 255;
            g /= 255;
            b /= 255;
          
            // Find greatest and smallest channel values
            let cmin = Math.min(r,g,b),
                cmax = Math.max(r,g,b),
                delta = cmax - cmin,
                h = 0,
                s = 0,
                l = 0;
          
            // Calculate hue
            // No difference
            if (delta == 0)
              h = 0;
            // Red is max
            else if (cmax == r)
              h = ((g - b) / delta) % 6;
            // Green is max
            else if (cmax == g)
              h = (b - r) / delta + 2;
            // Blue is max
            else
              h = (r - g) / delta + 4;
          
            h = Math.round(h * 60);
              
            // Make negative hues positive behind 360°
            if (h < 0)
                h += 360;
          
            // Calculate lightness
            l = (cmax + cmin) / 2;
          
            // Calculate saturation
            s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
              
            // Multiply l and s by 100
            s = +(s * 100).toFixed(1);
            l = +(l * 100).toFixed(1);
          
            return "hsl(" + h + "," + s + "%," + l + "%)";
          }

    }
    return color
}
////////////////////////////////////////////////////////////////////////////////////////////
// prototypical constructors
////////////////////////////////////////////////////////////////////////////////////////////
function ColorProto(r,g,b) {
    const color = Object.create(ColorProto.prototype)
    color.r = r;
    color.g = g;
    color.b = b;
    return color;
}
ColorProto.prototype.rgbValues = function () {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`
}
ColorProto.prototype.rgbString = function () {
    return `rgb(${this.rgbValues()})`
}
ColorProto.prototype.transparency = function (a=1) {
    if (a > 1 || a < 0) {
        return console.warn('please use an alpha channel between 0 and 1')
    }
    return `rgba(${this.rgbValues()}, ${a})`
}
ColorProto.prototype.hexString = function () {
    const hexi = ['0', '1', '2','3','4','5','6','7','8','9','A','B', 'C', 'D', 'E', 'F']
    const { r, g, b } = this;
    function helper (value) {
        if (value === 0) {
            return '00'
        }
        let hex1, hex2;
        hex1 = Math.floor(value / 16)
        hex2 = 16 * ((value / 16) - hex1)
        return hexi[hex1] + hexi[hex2]
    }
    let hexStr = '';
    for (let color of [r,g,b]) {
        hexStr += helper(color)
    }
    return `#${hexStr}`;
}
ColorProto.prototype.hslString = function () {
    let { r, g, b } = this;
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;
  
    // Find greatest and smallest channel values
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
  
    // Calculate hue
    // No difference
    if (delta == 0)
      h = 0;
    // Red is max
    else if (cmax == r)
      h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g)
      h = (b - r) / delta + 2;
    // Blue is max
    else
      h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
      
    // Make negative hues positive behind 360°
    if (h < 0)
        h += 360;
  
    // Calculate lightness
    l = (cmax + cmin) / 2;
  
    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      
    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    return "hsl(" + h + "," + s + "%," + l + "%)";
  }
////////////////////////////////////////////////////////////////////////////////////////////
// pseudoClassical constructors
////////////////////////////////////////////////////////////////////////////////////////////
function ColorPseudo(r,g,b) {
    this.r = r;
    this.g = g;
    this.b = b;
}
ColorPseudo.prototype.rgbValues = function () {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`
}
ColorPseudo.prototype.rgbString = function () {
    return `rgb(${this.rgbValues()})`
}
ColorPseudo.prototype.transparency = function (a=1) {
    if (a > 1 || a < 0) {
        return console.warn('please use an alpha channel between 0 and 1')
    }
    return `rgba(${this.rgbValues()}, ${a})`
}
ColorPseudo.prototype.hexString = function () {
    const hexi = ['0', '1', '2','3','4','5','6','7','8','9','A','B', 'C', 'D', 'E', 'F']
    const { r, g, b } = this;
    function helper (value) {
        if (value === 0) {
            return '00'
        }
        let hex1, hex2;
        hex1 = Math.floor(value / 16)
        hex2 = 16 * ((value / 16) - hex1)
        return hexi[hex1] + hexi[hex2]
    }
    let hexStr = '';
    for (let color of [r,g,b]) {
        hexStr += helper(color)
    }
    return `#${hexStr}`;
}
ColorPseudo.prototype.hslString = function () {
    let { r, g, b } = this;
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;
  
    // Find greatest and smallest channel values
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
  
    // Calculate hue
    // No difference
    if (delta == 0)
      h = 0;
    // Red is max
    else if (cmax == r)
      h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g)
      h = (b - r) / delta + 2;
    // Blue is max
    else
      h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
      
    // Make negative hues positive behind 360°
    if (h < 0)
        h += 360;
  
    // Calculate lightness
    l = (cmax + cmin) / 2;
  
    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      
    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    return "hsl(" + h + "," + s + "%," + l + "%)";
  }
let green = new ColorPseudo(0,255,0);
let purple = new ColorPseudo(255, 0, 255);

////////////////////////////////////////////////////////////////////////////////////////////
// es6 classes
////////////////////////////////////////////////////////////////////////////////////////////
class Color {
    constructor(r,g,b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.hex = this.hexString();
        this.rgb = this.rgbString();
        this.hsl = this.hslString();
    }
    rgbValues() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`
    }
    rgbString() {
        return `rgb(${this.rgbValues()})`
    }
    transparency(a=1) {
        if (a > 1 || a < 0) {
            return console.warn('please use an alpha channel between 0 and 1')
        }
        return `rgba(${this.rgbValues()}, ${a})`
    }
    hexString() {
        const hexi = ['0', '1', '2','3','4','5','6','7','8','9','A','B', 'C', 'D', 'E', 'F']
        const { r, g, b } = this;
        function helper (value) {
            if (value === 0) {
                return '00'
            }
            let hex1, hex2;
            hex1 = Math.floor(value / 16)
            hex2 = 16 * ((value / 16) - hex1)
            return hexi[hex1] + hexi[hex2]
        }
        let hexStr = '';
        for (let color of [r,g,b]) {
            hexStr += helper(color)
        }
        return `#${hexStr}`;
    }
    hslString() {
        let { r, g, b } = this;
        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;
      
        // Find greatest and smallest channel values
        let cmin = Math.min(r,g,b),
            cmax = Math.max(r,g,b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
      
        // Calculate hue
        // No difference
        if (delta == 0)
          h = 0;
        // Red is max
        else if (cmax == r)
          h = ((g - b) / delta) % 6;
        // Green is max
        else if (cmax == g)
          h = (b - r) / delta + 2;
        // Blue is max
        else
          h = (r - g) / delta + 4;
      
        h = Math.round(h * 60);
          
        // Make negative hues positive behind 360°
        if (h < 0)
            h += 360;
      
        // Calculate lightness
        l = (cmax + cmin) / 2;
      
        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
          
        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
      
        return "hsl(" + h + "," + s + "%," + l + "%)";
      }
}

const red = new Color(255, 0, 0)
const black = new Color(255, 255, 255)

/* there are benfits and drawbacks to a couple of these formats classes is by far the most elegant approach
however the use of the 'new' keyword I don't know if I always like. Because both the pseudoclassical and 
es6 syntax use the new keyword the es6 syntax is much better and easier to read. The factory function approach
is easily the worst because it does not use prototypes thereby polluting the memory of the runtime with extra 
references to virtually the same method. I like prototypal inheritance simply because I can avoid typing more later
as it does not use the 'new' keyword. Because prototypal inheritance still uses prototypes in it's model, we are
always refering to the same methods. Prototypal might be my favorite of the four patterns*/