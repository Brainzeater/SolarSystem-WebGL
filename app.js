// Skybox
var skybox = null,
    skyboxLattx = null,
    skyboxTbtx = null;

var skyboxWM;


//Parameters for Camera
var cx = 0.0;
var cy = 50.0;
var cz = 30.0;
var elevation = -60;
var angle = 0.01;
var roll = 0.01;

var letsROCK = false;

var keys = [];
var vx = 0.0;
var vy = 0.0;
var vz = 0.0;
var rvx = 0.0;
var rvy = 0.0;
var rvz = 0.0;


var planet = 999;
var liftOff = false;
var lookAround = false;
var lockOnSun = false;


var observerPosition = [cx, cy, cz];


var keyFunctionDown =function(e) {
  if(!keys[e.keyCode]) {
    keys[e.keyCode] = true;
    switch(e.keyCode) {
      case 37:
      lookAround = true;
  //console.log("KeyUp   - Dir LEFT");
      rvy = rvy + 1.0;
      break;

      case 39:
      lookAround = true;
  //console.log("KeyUp   - Dir RIGHT");
      rvy = rvy - 1.0;
      break;
      
      case 38:
      lookAround = true;
  //console.log("KeyUp   - Dir UP");
      rvx = rvx + 1.0;
      break;
      
      case 40:
      lookAround = true;
  //console.log("KeyUp   - Dir DOWN");
      rvx = rvx - 1.0;
      break;
      
      case 81:
      lookAround = true;
  //console.log("KeyUp   - Dir ROLL LEFT");
      rvz = rvz + 1.0;
      break;
      
      case 69:
      lookAround = true;
  //console.log("KeyUp   - Dir ROLL RIGHT");
      rvz = rvz - 1.0;
      break;
      
      case 65:
      liftOff = true;
  //console.log("KeyUp   - Pos LEFT");
      vx = vx - 1.0;
      break;
      
      case 68:
      liftOff = true;
  //console.log("KeyUp   - Pos RIGHT");
      vx = vx + 1.0;
      break;
      
      case 82:
      liftOff = true;
  //console.log("KeyUp   - Pos UP");
      vy = vy + 1.0;
      break;
      
      case 70:
      liftOff = true;
  //console.log("KeyUp   - Pos DOWN");
      vy = vy - 1.0;
      break;
      
      case 87:
      liftOff = true;
  //console.log("KeyUp   - Pos FORWARD");
      vz = vz - 1.0;
      break;
      
      case 83:
      liftOff = true;
  //console.log("KeyUp   - Pos BACKWARD");
      vz = vz + 1.0;
      break;

      case 27:

      //Parameters for Camera
      cx = 0.0;
      cy = 50.0;
      cz = 30.0;
      elevation = -60;
      angle = 0.01;
      roll = 0.01;

      planet = 999;
      break;
    }
    if(e.keyCode >= 48 && e.keyCode <= 56 || e.keyCode == 77){
      // For all Planets landings we want these settings
        elevation = -15;
        angle = 0.01;
        roll = 0.01;
        liftOff = false;
        lookAround = false;
        lockOnSun = false;
        switch(e.keyCode){
        // Planet choose:
        // key = 0; 0 -> sun
        case 48:
        planet = 0;
        break;
        // key = 1; 3 -> mercury
        case 49:
        planet = 3;
        break;
        // key = 2: 4 -> venus
        case 50:
        planet = 4;
        break;
        // key = 3; 1 -> earth
        case 51:
        planet = 1;
        break; 
        // key = M; 2 -> moon
        case 77:
        planet = 2;
        break;
        // key = 4; 5 -> mars
        case 52:
        planet = 5;
        break;

        // key = 5; 6 -> jupiter
        case 53:
        planet = 6;
        break;
        // 7 -> saturn
        case 54:
        planet = 7;
        break;
        // 8 -> uranus
        case 55:
        planet = 8;
        break;
        // 9 -> neptune
        case 56:
        planet = 9;
        break;



      }
    }

    // You can LOCK your View on the Sun only if you're on the planet (not lifting off)
    if(e.keyCode == 8 && !liftOff){
      lockOnSun = !lockOnSun;
    }
//  console.log(vx + " " + vy + " " + vz + " " + rvx + " " + rvy + " " + rvz);
  }
 // console.log(e.keyCode);
// console.log(planet);
}

var keyFunctionUp =function(e) {
  if(keys[e.keyCode]) {
    keys[e.keyCode] = false;
  switch(e.keyCode) {
    case 37:
//console.log("KeyDown  - Dir LEFT");
    rvy = rvy - 1.0;
    break;

    case 39:
//console.log("KeyDown - Dir RIGHT");
    rvy = rvy + 1.0;
    break;

    case 38:
//console.log("KeyDown - Dir UP");
    rvx = rvx - 1.0;
    break;
    case 40:
//console.log("KeyDown - Dir DOWN");
    rvx = rvx + 1.0;
    break;

    case 81:
//console.log("KeyDown - Dir ROLL LEFT");
    rvz = rvz - 1.0;
    break;

    case 69:
//console.log("KeyDown - Dir ROLL RIGHT");
    rvz = rvz + 1.0;
    break;
    
    case 65:
//console.log("KeyDown - Pos LEFT");
    vx = vx + 1.0;
    break;
    
    case 68:
//console.log("KeyDown - Pos RIGHT");
    vx = vx - 1.0;
    break;
    
    case 82:
//console.log("KeyDown - Pos UP");
    vy = vy - 1.0;
    break;
    
    case 70:
//console.log("KeyDown - Pos DOWN");
    vy = vy + 1.0;
    break;
    
    case 87:
//console.log("KeyDown - Pos FORWARD");
    vz = vz + 1.0;
    break;
    
    case 83:
//console.log("KeyDown - Pos BACKWARD");
    vz = vz - 1.0;
    break;
    
    case 32:
//console.log("SPACE   - Ghost on/off");
    letsROCK = !letsROCK;
    break;
  }
//  console.log(vx + " " + vy + " " + vz + " " + rvx + " " + rvy + " " + rvz);
  }
  // 48-57 -> 0-9
 // console.log(e.keyCode);
}
//'window' is a JavaScript object (if "canvas", it will not work)
window.addEventListener("keyup", keyFunctionUp, false);
window.addEventListener("keydown", keyFunctionDown, false);

// texture loader callback
var textureLoaderCallback = function() {
  var textureId = gl.createTexture();
  gl.activeTexture(gl.TEXTURE0 + this.txNum);
  gl.bindTexture(gl.TEXTURE_2D, textureId); 
    // gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);  
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this);    
// set the filtering so we don't need mips
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
}



var Node = function() {
  this.children = [];
  this.localMatrix = utils.identityMatrix();
  this.worldMatrix = utils.identityMatrix();
  this.textNum = 0;
};

Node.prototype.setParent = function(parent) {
  // remove us from our parent
  if (this.parent) {
    var ndx = this.parent.children.indexOf(this);
    if (ndx >= 0) {
      this.parent.children.splice(ndx, 1);
    }
  }

  // Add us to our new parent
  if (parent) {
    parent.children.push(this);
  }
  this.parent = parent;
};

Node.prototype.updateWorldMatrix = function(matrix) {
  if (matrix) {
    // a matrix was passed in so do the math
    this.worldMatrix = utils.multiplyMatrices(matrix, this.localMatrix);
  } else {
    // no matrix was passed in so just copy.
    utils.copy(this.localMatrix, this.worldMatrix);
  }

  // now process all the children
  var worldMatrix = this.worldMatrix;
  this.children.forEach(function(child) {
    child.updateWorldMatrix(worldMatrix);
  });
};


//WORLD COORDINATES

function main() {

  //--------------------------INITIALIZATION


  //define directional light
  var dirLightAlpha = -utils.degToRad(0);
  var dirLightBeta  = -utils.degToRad(120);

  var directionalLight = [Math.cos(dirLightAlpha) * Math.cos(dirLightBeta),
              Math.sin(dirLightAlpha),
              Math.cos(dirLightAlpha) * Math.sin(dirLightBeta)
              ];
  var directionalLightColor = [1.0, 1.0, 1.0];
  var materialColor = [0.5, 0.5, 0.5];
  var specularColor = [1.0, 1.0, 1.0];         
  var specularPower = 50.0;

  var canvas = document.getElementById("c");
  try{
    gl = canvas.getContext("webgl2");
  } catch(e){
    console.log(e);
  }
  // var gl = canvas.getContext("webgl2");
  if (!gl) {
    document.write("GL context not opened");
    return;
  }
  utils.resizeCanvasToDisplaySize(gl.canvas);

  var shaderDir = "http://127.0.0.1:8887/shaders/" 
  // var textureDir = "http://127.0.0.1:8887/assets/SolarSystemScopePlanetTextures/" 
  var textureDir = "http://127.0.0.1:8887/assets/SolarSystemScopePlanetTextures/" 
  var baseDir = "http://127.0.0.1:8887/" 
  var program = null;


  var lastUpdateTime = (new Date).getTime();

  utils.get_json(baseDir + 'model/OnePlanet.json', function(loadedModel){planetModel = loadedModel;});
  var planetVertices = planetModel.meshes[0].vertices;
  var planetIndices = [].concat.apply([], planetModel.meshes[0].faces);
  var planetTexCoords = planetModel.meshes[0].texturecoords[0];
  var planetNormals = planetModel.meshes[0].normals;

  var w=canvas.clientWidth;
  var h=canvas.clientHeight;
  //SET Global states (viewport size, viewport background color, Depth test)
  gl.viewport(0, 0, w, h);
  gl.clearColor(0.85, 0.85, 0.85, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  gl.enable(gl.DEPTH_TEST);

  utils.loadFiles([shaderDir + 'vs.glsl', shaderDir + 'fs.glsl'], function (shaderText) {
      var vertexShader = utils.createShader(gl, gl.VERTEX_SHADER, shaderText[0]);
      var fragmentShader = utils.createShader(gl, gl.FRAGMENT_SHADER, shaderText[1]);

      program = utils.createProgram(gl, vertexShader, fragmentShader);
    });
  
  gl.useProgram(program);

  skybox = new OBJ.Mesh(skyboxStr);


  // look up where the vertex data needs to go.
  var positionAttributeLocation = gl.getAttribLocation(program, "inPosition");  
  var uvAttributeLocation = gl.getAttribLocation(program, "a_uv");   
  var normalAttributeLocation = gl.getAttribLocation(program, "inNormal");  
  var matrixLocation = gl.getUniformLocation(program, "matrix");  
  var textLocation = gl.getUniformLocation(program, "u_texture");
  var materialDiffColorHandle = gl.getUniformLocation(program, 'mDiffColor');
  var lightDirectionHandle = gl.getUniformLocation(program, 'lightDirection');
  var lightColorHandle = gl.getUniformLocation(program, 'lightColor');
  var normalMatrixPositionHandle = gl.getUniformLocation(program, 'nMatrix');
  var vertexMatrixPositionHandle = gl.getUniformLocation(program, 'pMatrix');
  var materialDiffColorHandle = gl.getUniformLocation(program, 'mDiffColor');
  var materialSpecColorHandle = gl.getUniformLocation(program, 'mSpecColor');
  var materialSpecPowerHandle = gl.getUniformLocation(program, 'mSpecPower');
  var eyePositionHandle = gl.getUniformLocation(program, 'eyePosition');

  var perspectiveMatrix = utils.MakePerspective(60, w/h, 0.1, 100.0);
  var viewMatrix = utils.MakeView(cx, cy, cz, elevation, angle);
    
  var vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  var positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(planetVertices), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(positionAttributeLocation);
  gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 0, 0);

  var uvBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(planetTexCoords), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(uvAttributeLocation);
  gl.vertexAttribPointer(uvAttributeLocation, 2, gl.FLOAT, false, 0, 0);

  var normalBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(planetNormals), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(normalAttributeLocation);
  gl.vertexAttribPointer(normalAttributeLocation, 3, gl.FLOAT, false, 0, 0);

  var indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(planetIndices), gl.STATIC_DRAW); 


  // OBJ.initMeshBuffers(gl, skybox); 
  // Create the textures
  sun = new Image();
  sun.txNum = 0;
  sun.onload = textureLoaderCallback;
  sun.src = textureDir+"Sun.jpg";

  mer = new Image();
  mer.txNum = 1;
  mer.onload = textureLoaderCallback;
  mer.src = textureDir+"Mercury.jpg";

  ert = new Image();
  ert.txNum = 2;
  ert.onload = textureLoaderCallback;
  ert.src = textureDir+"EarthDay.jpg";

  mon = new Image();
  mon.txNum = 3;
  mon.onload = textureLoaderCallback;
  mon.src = textureDir+"Moon.jpg";

  ven = new Image();
  ven.txNum = 4;
  ven.onload = textureLoaderCallback;
  ven.src = textureDir+"VenusAtmosphere.jpg";

  mar = new Image();
  mar.txNum = 5;
  mar.onload = textureLoaderCallback;
  mar.src = textureDir+"Mars.jpg";

  jup = new Image();
  jup.txNum = 6;
  jup.onload = textureLoaderCallback;
  jup.src = textureDir+"Jupiter.jpg";

  sat = new Image();
  sat.txNum = 7;
  sat.onload = textureLoaderCallback;
  sat.src = textureDir+"Saturn.jpg";

  uranus = new Image();
  uranus.txNum = 8;
  uranus.onload = textureLoaderCallback;
  uranus.src = textureDir+"Uranus.jpg";

  neptune = new Image();
  neptune.txNum = 9;
  neptune.onload = textureLoaderCallback;
  neptune.src = textureDir+"Neptune.jpg";

  // skyboxLattx = new Image();
  // skyboxLattx.txNum = 8;
  // skyboxLattx.onload = textureLoaderCallback;
  // skyboxLattx.src = SkyboxLatData;

  // skyboxTbtx = new Image();
  // skyboxTbtx.txNum = 10;
  // skyboxTbtx.onload = textureLoaderCallback;
  // skyboxTbtx.src = SkyboxTbData;


  skyboxWM = utils.multiplyMatrices(utils.MakeRotateZMatrix(30), utils.MakeRotateYMatrix(135)); 
  
  calisto = new Image();
  calisto.txNum=10;
  calisto.onload=textureLoaderCallback;
  calisto.src=textureDir+"calisto.jpg";


  // ioj=new Image();
  // ioj.textNum=11;
  // ioj.onload=textureLoaderCallback;
  // ioj.src=textureDir+"io.jpg";

  // mimas=new Image();
  // mimas.textNum=12;
  // mimas.onload=textureLoaderCallback;
  // mimas.src=textureDir+"mimas.jpg";

  // titan= new Image();
  // titan.textNum=13;
  // titan.onload=textureLoaderCallback;
  // titan.src=textureDir+"titan.jpg";

  //Define the scene Graph

  var objects = [];

  var sunOrbitNode = new Node();

  // Orbit Radiuses:
  // here we use actual  orbit radiuses of planets/ Earth=149Bkm/moon=4700km/Mercury=57Bkm/venus=158Bkm/mars=228Bkm/
  // Jupiter=778Bkm/Saturn=1427Bkm/Uranus=2869Bkm/Neptune=4496Bkm.
  // But if use proper relations among planets ,the planet with big  radius will be out of our monitor.  .
  // For convenience we took largest size value as 40 and smallest one as 4, and assign values for other planet according actual radiuses/
  var orbitRadiusIncreaser = 3;

  earthOrbitRadius = 9 + orbitRadiusIncreaser;

  moonOrbitRadius = 1.3;

  mercuryOrbitRadius = 4;

  venusOrbitRadius = 7.4;

  marsOrbitRadius = 12 + orbitRadiusIncreaser;

  jupOrbitRadius = 18 + orbitRadiusIncreaser;

  satOrbitRadius = 27 + orbitRadiusIncreaser;

  uranusOrbitRadius = 32 + orbitRadiusIncreaser;

  neptuneOrbitRadius = 40 + orbitRadiusIncreaser;

  calOrbitRadius=4;
  ioOrbitRadius=5;
  titanOrbitRadius=5;
  mimOrbitRadius=6;

  var earthOrbitNode = new Node();
  earthOrbitNode.localMatrix = utils.MakeTranslateMatrix(-earthOrbitRadius, 0, 0);

  var moonOrbitNode = new Node();
  moonOrbitNode.localMatrix = utils.MakeTranslateMatrix(moonOrbitRadius, 0, 0);

  var mercuryOrbitNode = new Node();
  mercuryOrbitNode.localMatrix = utils.MakeTranslateMatrix(mercuryOrbitRadius, 0, 0);

  var venusOrbitNode = new Node();
  venusOrbitNode.localMatrix = utils.MakeTranslateMatrix(-venusOrbitRadius, 0, 0);

  var marsOrbitNode = new Node();
  marsOrbitNode.localMatrix = utils.MakeTranslateMatrix(marsOrbitRadius, 0, 0);

  var jupOrbitNode = new Node();
  jupOrbitNode.localMatrix = utils.MakeTranslateMatrix(jupOrbitRadius, 0, 0);

  var satOrbitNode = new Node();
  satOrbitNode.localMatrix = utils.MakeTranslateMatrix(-satOrbitRadius, 0, 0);

  var uranusOrbitNode = new Node();
  uranusOrbitNode.localMatrix = utils.MakeTranslateMatrix(uranusOrbitRadius, 0, 0);

  var neptuneOrbitNode = new Node();
  neptuneOrbitNode.localMatrix = utils.MakeTranslateMatrix(-neptuneOrbitRadius, 0, 0);
////satellite
  var calOrbitNode= new Node();
  calOrbitNode.localMatrix=utils.MakeTranslateMatrix(calOrbitRadius,0,0);
  var ioOrbitNode = new Node();
  ioOrbitNode.localMatrix=utils.MakeTranslateMatrix(-ioOrbitRadius,0,0);
  var titanOrbitNode =new Node();
  titanOrbitNode.localMatrix=utils.MakeTranslateMatrix(titanOrbitRadius,0,0);
  var mimOrbitNode =new Node();
  mimOrbitNode.localMatrix=utils.MakeTranslateMatrix(mimOrbitRadius,0,0);
  // Planet/Sun Radius

  // Define planet Radiuses:
  // Firstly we took actual size of planet Mercury=2440km/Mars=3390/Venus=6052/Earth=6371
  // Neptune=24622/Uranus=25362/Saturn=58232/Jupiter=70000/But if use proper relations among planets, 
  // small planets become a point.
  // For convenience we took largest size value as 1.5 and smallest one as 0.15,
  // and assign values for other planet according actual radiuses
  // we werent considering the actual size of Sun, because it is too large

  sunRadius = 3.5;

  mercuryRadius = 0.3;

  earthRadius = 0.5;

  moonRadius = 0.15;

  venusRadius = 0.5;

  marsRadius = 0.33;

  jupRadius = 2;

  satRadius = 1.5;

  uranusRadius = 0.75;

  neptuneRadius = 0.75;

  calRadius =0.2;
  ioRadius=0.15;
  titanRadius=0.5;
  mimRadius=0.3;

  var sunNode = new Node();
  sunNode.localMatrix = utils.MakeScaleMatrix(sunRadius, sunRadius, sunRadius);  
  sunNode.textNum = 0;
  sunNode.drawInfo = {
    materialColor: [0.6, 0.6, 0.0],
    programInfo: program,
    bufferLength: planetIndices.length,
    vertexArray: vao,
  };

  var mercuryNode = new Node();
  mercuryNode.localMatrix = utils.MakeScaleMatrix(mercuryRadius, mercuryRadius, mercuryRadius);
  mercuryNode.textNum = 1;
  mercuryNode.drawInfo = {
    materialColor: [0.6, 0.6, 0.6],
    programInfo: program,
    bufferLength: planetIndices.length,
    vertexArray: vao,
  };


  earthNode = new Node();
  earthNode.localMatrix = utils.MakeScaleMatrix(earthRadius, earthRadius, earthRadius);
  earthNode.textNum = 2;
  earthNode.drawInfo = {
    materialColor: [0.2, 0.5, 0.8],
    programInfo: program,
    bufferLength: planetIndices.length,
    vertexArray: vao,
  };

  var moonNode = new Node();
  moonNode.localMatrix = utils.MakeScaleMatrix(moonRadius, moonRadius, moonRadius);
  moonNode.textNum = 3;
  moonNode.drawInfo = {
    materialColor: [0.6, 0.6, 0.6],
    programInfo: program,
    bufferLength: planetIndices.length,
    vertexArray: vao,
  };

  var venusNode = new Node();
  venusNode.localMatrix = utils.MakeScaleMatrix(venusRadius, venusRadius, venusRadius);
  venusNode.textNum = 4;
  venusNode.drawInfo = {
    materialColor: [0.6, 0.6, 0.6],
    programInfo: program,
    bufferLength: planetIndices.length,
    vertexArray: vao,
  };

  var marsNode = new Node();
  marsNode.localMatrix = utils.MakeScaleMatrix(marsRadius, marsRadius, marsRadius);
  marsNode.textNum = 5;
  marsNode.drawInfo = {
    materialColor: [0.6, 0.6, 0.6],
    programInfo: program,
    bufferLength: planetIndices.length,
    vertexArray: vao,
  };

  var jupNode = new Node();
  jupNode.localMatrix = utils.MakeScaleMatrix(jupRadius, jupRadius, jupRadius);
  jupNode.textNum = 6;
  jupNode.drawInfo = {
    materialColor: [0.6, 0.6, 0.6],
    programInfo: program,
    bufferLength: planetIndices.length,
    vertexArray: vao,
  };

  var satNode = new Node();
  satNode.localMatrix = utils.MakeScaleMatrix(satRadius, satRadius, satRadius);
  satNode.textNum = 7;
  satNode.drawInfo = {
    materialColor: [0.6, 0.6, 0.6],
    programInfo: program,
    bufferLength: planetIndices.length,
    vertexArray: vao,
  };

  var uranusNode = new Node();
  uranusNode.localMatrix = utils.MakeScaleMatrix(uranusRadius, uranusRadius, uranusRadius);
  uranusNode.textNum = 8;
  uranusNode.drawInfo = {
    materialColor: [0.6, 0.6, 0.6],
    programInfo: program,
    bufferLength: planetIndices.length,
    vertexArray: vao,
  };

  var neptuneNode = new Node();
  neptuneNode.localMatrix = utils.MakeScaleMatrix(neptuneRadius, neptuneRadius, neptuneRadius);
  neptuneNode.textNum = 9;
  neptuneNode.drawInfo = {
    materialColor: [0.6, 0.6, 0.6],
    programInfo: program,
    bufferLength: planetIndices.length,
    vertexArray: vao,
  };


   var calNode=new Node();
    calNode.localMatrix = utils.MakeScaleMatrix(calRadius, calRadius, calRadius);
    calNode.textNum = 10;
    calNode.drawInfo = {
      materialColor: [0.6, 0.6, 0.6],
      programInfo: program,
      bufferLength: planetIndices.length,
      vertexArray: vao,
    };
   var ioNode = new Node();
    ioNode.localMatrix = utils.MakeScaleMatrix(ioRadius, ioRadius, ioRadius);
    ioNode.textNum = 11;
    ioNode.drawInfo = {
      materialColor: [0.6, 0.6, 0.6],
      programInfo: program,
      bufferLength: planetIndices.length,
      vertexArray: vao,
    };

   var mimNode = new Node();
    mimNode.localMatrix = utils.MakeScaleMatrix(mimRadius, mimRadius, mimRadius);
    mimNode.textNum = 12;
    mimNode.drawInfo = {
      materialColor: [0.6, 0.6, 0.6],
      programInfo: program,
      bufferLength: planetIndices.length,
      vertexArray: vao,
    };



   var titNode = new Node();
    titNode.localMatrix = utils.MakeScaleMatrix(titanRadius, titanRadius, titanRadius);
    titNode.textNum = 13;
    titNode.drawInfo = {
      materialColor: [0.6, 0.6, 0.6],
      programInfo: program,
      bufferLength: planetIndices.length,
      vertexArray: vao,
    };

  sunNode.setParent(sunOrbitNode);

  mercuryOrbitNode.setParent(sunOrbitNode);
  mercuryNode.setParent(mercuryOrbitNode);

  venusOrbitNode.setParent(sunOrbitNode);
  venusNode.setParent(venusOrbitNode);

  earthOrbitNode.setParent(sunOrbitNode);
  earthNode.setParent(earthOrbitNode);

  moonOrbitNode.setParent(earthOrbitNode);
  moonNode.setParent(moonOrbitNode);

  marsOrbitNode.setParent(sunOrbitNode);
  marsNode.setParent(marsOrbitNode);

  jupOrbitNode.setParent(sunOrbitNode);
  jupNode.setParent(jupOrbitNode);

  satOrbitNode.setParent(sunOrbitNode);
  satNode.setParent(satOrbitNode);

  uranusOrbitNode.setParent(sunOrbitNode);
  uranusNode.setParent(uranusOrbitNode);

  neptuneOrbitNode.setParent(sunOrbitNode);
  neptuneNode.setParent(neptuneOrbitNode);


    calOrbitNode.setParent(jupOrbitNode);
    calNode.setParent(calOrbitNode);

    ioOrbitNode.setParent(jupOrbitNode);
    ioNode.setParent(ioOrbitNode);

    mimOrbitNode.setParent(satOrbitNode);
    mimNode.setParent(mimOrbitNode);

    titanOrbitNode.setParent(satOrbitNode);
    titNode.setParent(titanOrbitNode);

  var objects = [
    sunNode,
    mercuryNode,
    venusNode,
    earthNode,
    moonNode,
    marsNode,
    jupNode,
    satNode,
    uranusNode,
    neptuneNode,
    calNode,
    ioNode,
    mimNode,
    titNode,
  ];

  //---------------SceneGraph defined
  requestAnimationFrame(drawScene);


// function animate(){
//     var currentTime = (new Date).getTime();
//     if(lastUpdateTime){
//       var deltaC = (30 * (currentTime - lastUpdateTime)) / 1000.0;
//       cubeRx += deltaC;
//       cubeRy -= deltaC;
//       cubeRz += deltaC;    
//     }
//     worldMatrix = utils.MakeWorld(0.0, 0.0, 0.0, cubeRx, cubeRy, cubeRz, 1.0);
//     lastUpdateTime = currentTime;               
//   }


  function drawScene(time) {
    time *= 0.001;


    var tempView = utils.MakeView(cx, cy, cz, elevation, angle);

    var a = [0,0,0];
    var u = [0,1,0];

    switch(planet){
      case 0:

      // tempView = utils.multiplyMatrices(utils.MakeTranslateMatrix(0,-sunRadius,0), sunOrbitNode.worldMatrix);
        if(!liftOff){
            cx = sunOrbitNode.worldMatrix[3];
            cy = sunRadius+0.15;
            cz = sunOrbitNode.worldMatrix[11];
        }
        break;

      case 1:

        if(!liftOff){
          cx = earthOrbitNode.worldMatrix[3];
          cy = earthRadius+0.15;
          cz = earthOrbitNode.worldMatrix[11];
        }
        if(lockOnSun){

          cx = earthOrbitNode.worldMatrix[3];
          cy = earthRadius+0.15;
          cz = earthOrbitNode.worldMatrix[11];
          var c = [cx,cy,cz];
          tempView = utils.MakeLookAt(c,a,u);
          

        }
        break;

      case 2:
        if(!liftOff){
          cx = moonOrbitNode.worldMatrix[3];
          cy = moonRadius+0.15;
          cz = moonOrbitNode.worldMatrix[11];
        }
        if(lockOnSun){
          cx = moonOrbitNode.worldMatrix[3];
          cy = moonRadius+0.15;
          cz = moonOrbitNode.worldMatrix[11];
          var c = [cx,cy,cz];
          tempView = utils.MakeLookAt(c,a,u);
        }
        break;

      case 3:
        if(!liftOff){
          cx = mercuryOrbitNode.worldMatrix[3];
          cy = mercuryRadius+0.15;
          cz = mercuryOrbitNode.worldMatrix[11];
        }
        if(lockOnSun){
          cx = mercuryOrbitNode.worldMatrix[3];
          cy = mercuryRadius+0.15;
          cz = mercuryOrbitNode.worldMatrix[11];
          var c = [cx,cy,cz];
          tempView = utils.MakeLookAt(c,a,u);
        }
        break;

      case 4:
        if(!liftOff){
          cx = venusOrbitNode.worldMatrix[3];
          cy = venusRadius+0.15;
          cz = venusOrbitNode.worldMatrix[11];
        }
        if(lockOnSun){
          cx = venusOrbitNode.worldMatrix[3];
          cy = venusRadius+0.15;
          cz = venusOrbitNode.worldMatrix[11];
          var c = [cx,cy,cz];
          tempView = utils.MakeLookAt(c,a,u);
        }
        break;

      case 5:
        if(!liftOff){
          cx = marsOrbitNode.worldMatrix[3];
          cy = marsRadius+0.15;
          cz = marsOrbitNode.worldMatrix[11];
        }
        if(lockOnSun){
          cx = marsOrbitNode.worldMatrix[3];
          cy = marsRadius+0.15;
          cz = marsOrbitNode.worldMatrix[11];
          var c = [cx,cy,cz];
          tempView = utils.MakeLookAt(c,a,u);
        }
        break;

        
      case 6:
        if(!liftOff){
          cx = jupOrbitNode.worldMatrix[3];
          cy = jupRadius+0.15;
          cz = jupOrbitNode.worldMatrix[11];
        }
        if(lockOnSun){
          cx = jupOrbitNode.worldMatrix[3];
          cy = jupRadius+0.15;
          cz = jupOrbitNode.worldMatrix[11];
          var c = [cx,cy,cz];
          tempView = utils.MakeLookAt(c,a,u);
        }
        break;

        
      case 7:
        if(!liftOff){
          cx = satOrbitNode.worldMatrix[3];
          cy = satRadius+0.15;
          cz = satOrbitNode.worldMatrix[11];
        }
        if(lockOnSun){
          cx = satOrbitNode.worldMatrix[3];
          cy = satRadius+0.15;
          cz = satOrbitNode.worldMatrix[11];
          var c = [cx,cy,cz];
          tempView = utils.MakeLookAt(c,a,u);
        }
        break;

        
      case 8:
        if(!liftOff){
          cx = uranusOrbitNode.worldMatrix[3];
          cy = uranusRadius+0.15;
          cz = uranusOrbitNode.worldMatrix[11];
        }
        if(lockOnSun){
          cx = uranusOrbitNode.worldMatrix[3];
          cy = uranusRadius+0.15;
          cz = uranusOrbitNode.worldMatrix[11];
          var c = [cx,cy,cz];
          tempView = utils.MakeLookAt(c,a,u);
        }
        break;

      case 9:
        if(!liftOff){
          cx = neptuneOrbitNode.worldMatrix[3];
          cy = neptuneRadius+0.15;
          cz = neptuneOrbitNode.worldMatrix[11];
        }
        if(lockOnSun){
          cx = neptuneOrbitNode.worldMatrix[3];
          cy = neptuneRadius+0.15;
          cz = neptuneOrbitNode.worldMatrix[11];
          var c = [cx,cy,cz];
          tempView = utils.MakeLookAt(c,a,u);
        }
        break;

      case 999:
        viewMatrix = viewMatrix;
        break;

      // case 999:
      // tempView = utils.MakeView(cx, cy, cz, elevation, angle);
      // break;
    }

    if(!lockOnSun){
      viewMatrix = utils.multiplyMatrices(
              utils.MakeRotateZMatrix(roll),tempView);
    }else{
      liftOff=false;
      lookAround = false;
      viewMatrix = tempView;  
    } 
    // Magic for moving the ship
    dvecmat = utils.transposeMatrix(viewMatrix); dvecmat[12] = dvecmat[13] = dvecmat[14] = 0.0;
    xaxis = [dvecmat[0],dvecmat[4],dvecmat[8]];
    yaxis = [dvecmat[1],dvecmat[5],dvecmat[9]];
    zaxis = [dvecmat[2],dvecmat[6],dvecmat[10]];

    if(letsROCK){
      a = 5;
    }else{
      a = 1;
    }

    if((rvx != 0) || (rvy != 0) || (rvz != 0)) {
      qx = Quaternion.fromAxisAngle(xaxis, utils.degToRad(rvx * 1));
      qy = Quaternion.fromAxisAngle(yaxis, utils.degToRad(rvy * 1));
      qz = Quaternion.fromAxisAngle(zaxis, utils.degToRad(rvz * 1));
      newDvecmat = utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
        qy.toMatrix4(), qx.toMatrix4()), qz.toMatrix4()), dvecmat);
      R11=newDvecmat[10];R12=newDvecmat[8];R13=newDvecmat[9];
      R21=newDvecmat[2]; R22=newDvecmat[0];R23=newDvecmat[1];
      R31=newDvecmat[6]; R32=newDvecmat[4];R33=newDvecmat[5];
      
      if((R31<1)&&(R31>-1)) {
        theta = -Math.asin(R31);
        phi = Math.atan2(R32/Math.cos(theta), R33/Math.cos(theta));
        psi = Math.atan2(R21/Math.cos(theta), R11/Math.cos(theta));
        
      } else {
        phi = 0;
        if(R31<=-1) {
          theta = Math.PI / 2;
          psi = phi + Math.atan2(R12, R13);
        } else {
          theta = -Math.PI / 2;
          psi = Math.atan2(-R12, -R13) - phi;
        }
      }
      elevation = theta/Math.PI*180;
      roll      = phi/Math.PI*180;
      angle     = psi/Math.PI*180;
    }


    delta = utils.multiplyMatrixVector(dvecmat, [vx, vy, vz, 0.0]);
    cx += delta[0] / 10 * a;
    cy += delta[1] / 10 * a;
    cz += delta[2] / 10 * a;


    projectionMatrix  = utils.multiplyMatrices(perspectiveMatrix, viewMatrix);   


    // sunNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(0.05), sunNode.localMatrix);

    var viewProjectionMatrix = projectionMatrix;


    // update the local matrices for each object.
    // Speed of rotation around the Sun:We use actual speed of rotation for planet :Mercury=47.9kmps
    //Venus=34kmps,Earth=29kmps,Mars =24 kmps, Jupiter =13kmps,But if use proper relations among planets ,small planets become as point.
  //For convenience we took value 1 as highest speed and 0.09 lowest/And assigned speed for other planet according with actual speed/
    earthOrbitSpeed = 0.65;

    moonOrbitSpeed = -0.2;

    mercuryOrbitSpeed = 1;

    venusOrbitSpeed = 0.7;

    marsOrbitSpeed = 0.6;

    jupOrbitSpeed = 0.09;

    satOrbitSpeed = 0.1;

    uranusOrbitSpeed = 0.13;

    neptuneOrbitSpeed = 0.15;
 
calOrbitSpeed = 0.2;
ioOrbitSpeed=0.15;
mimOrbitSpeed=0.08;
titOrbitSpeed=0.11;


calOrbitNode.localMatrix=utils.multiplyMatrices(utils.MakeRotateYMatrix(calOrbitSpeed), calOrbitNode.localMatrix);
ioOrbitNode.localMatrix=utils.multiplyMatrices(utils.MakeRotateYMatrix(ioOrbitSpeed), ioOrbitNode.localMatrix);
mimOrbitNode.localMatrix=utils.multiplyMatrices(utils.MakeRotateYMatrix(mimOrbitSpeed), mimOrbitNode.localMatrix);
titanOrbitNode.localMatrix=utils.multiplyMatrices(utils.MakeRotateYMatrix(titOrbitSpeed), titanOrbitNode.localMatrix);


    earthOrbitNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(earthOrbitSpeed), earthOrbitNode.localMatrix);
    moonOrbitNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(moonOrbitSpeed), moonOrbitNode.localMatrix);
    mercuryOrbitNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(mercuryOrbitSpeed), mercuryOrbitNode.localMatrix);
    venusOrbitNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(venusOrbitSpeed), venusOrbitNode.localMatrix);
    marsOrbitNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(marsOrbitSpeed), marsOrbitNode.localMatrix);
    jupOrbitNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(jupOrbitSpeed), jupOrbitNode.localMatrix);
    satOrbitNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(satOrbitSpeed), satOrbitNode.localMatrix);
    uranusOrbitNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(uranusOrbitSpeed), uranusOrbitNode.localMatrix);
    neptuneOrbitNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(neptuneOrbitSpeed), neptuneOrbitNode.localMatrix);

calOrbitNode.localMatrix=utils.multiplyMatrices(utils.MakeRotateYMatrix(calOrbitSpeed), calOrbitNode.localMatrix);
ioOrbitNode.localMatrix=utils.multiplyMatrices(utils.MakeRotateYMatrix(ioOrbitSpeed), ioOrbitNode.localMatrix);
mimOrbitNode.localMatrix=utils.multiplyMatrices(utils.MakeRotateYMatrix(mimOrbitSpeed), mimOrbitNode.localMatrix);
titanOrbitNode.localMatrix=utils.multiplyMatrices(utils.MakeRotateYMatrix(titOrbitSpeed), titanOrbitNode.localMatrix);

    // Speed of rotation around its axis:
    sunSpeed = 0.05;

    earthSpeed = 2;

    moonSpeed = -0.2;

    mercurySpeed = 0.08;

    venusSpeed = 0.08;

    marsSpeed = 2.0;

    jupSpeed = 5;

    satSpeed = 4.8;

    uranusSpeed = 4.8;

    neptuneSpeed = 0.55;

calSpeed=0.1;
ioSpeed=0.1;
mimSpeed=0.1;
titSpeed=0.1;

    sunNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(sunSpeed), sunNode.localMatrix);
    earthNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(earthSpeed), earthNode.localMatrix);
    moonNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(moonSpeed), moonNode.localMatrix);
    mercuryNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(mercurySpeed), mercuryNode.localMatrix);
    venusNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(venusSpeed), venusNode.localMatrix);
    marsNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(marsSpeed), marsNode.localMatrix);
    jupNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(jupSpeed), jupNode.localMatrix);
    satNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(satSpeed), satNode.localMatrix);
    uranusNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(uranusSpeed), uranusNode.localMatrix);
    neptuneNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(neptuneSpeed), neptuneNode.localMatrix);

    calNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(calSpeed), calNode.localMatrix);
    ioNode.localMatrix= utils.multiplyMatrices(utils.MakeRotateYMatrix(ioSpeed), ioNode.localMatrix);
    mimNode.localMatrix= utils.multiplyMatrices(utils.MakeRotateYMatrix(mimSpeed), mimNode.localMatrix);
    titNode.localMatrix= utils.multiplyMatrices(utils.MakeRotateYMatrix(titSpeed), titNode.localMatrix);



    // Update all world matrices in the scene graph
    sunOrbitNode.updateWorldMatrix();
// //////////////////////////////
    observerPosition = [cx, cy, cz];

    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

// draws the skybox

//     projectionMatrix  = utils.multiplyMatrices(perspectiveMatrix, viewMatrix); 
// // projectionMatrix  = utils.multiplyMatrices(perspectiveMatrix, viewMatrix);
//     gl.bindBuffer(gl.ARRAY_BUFFER, skybox.vertexBuffer);
//     gl.vertexAttribPointer(positionAttributeLocation, skybox.vertexBuffer.itemSize, gl.FLOAT, false, 0, 0);
//     gl.bindBuffer(gl.ARRAY_BUFFER, skybox.textureBuffer);
//     gl.vertexAttribPointer(uvAttributeLocation, skybox.textureBuffer.itemSize, gl.FLOAT, false, 0, 0);
    
//     gl.bindBuffer(gl.ARRAY_BUFFER, skybox.normalBuffer);
//     gl.vertexAttribPointer(normalAttributeLocation, skybox.normalBuffer.itemSize, gl.FLOAT, false, 0, 0);

//     // gl.uniform4f(program.lightDir, gLightDir[0], gLightDir[1], gLightDir[2], 1.0);
     
//     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, skybox.indexBuffer);   
//     WVPmatrix = utils.multiplyMatrices(projectionMatrix, utils.multiplyMatrices(utils.MakeTranslateMatrix(cx,cy,cz),utils.multiplyMatrices(skyboxWM,utils.MakeScaleMatrix(500.0))));
//     gl.uniformMatrix4fv(matrixLocation, gl.FALSE, utils.transposeMatrix(WVPmatrix));
//     gl.uniform1i(textLocation, 8);
//     gl.drawElements(gl.TRIANGLES, 24, gl.UNSIGNED_SHORT, 24);
//     gl.uniform1i(textLocation, 10);
//     gl.drawElements(gl.TRIANGLES, 12, gl.UNSIGNED_SHORT, 0);
    

//   var positionBuffer = gl.createBuffer();
//   gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
//   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(planetVertices), gl.STATIC_DRAW);
//   gl.enableVertexAttribArray(positionAttributeLocation);
//   gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 0, 0);

//   var uvBuffer = gl.createBuffer();
//   gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
//   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(planetTexCoords), gl.STATIC_DRAW);
//   gl.enableVertexAttribArray(uvAttributeLocation);
//   gl.vertexAttribPointer(uvAttributeLocation, 2, gl.FLOAT, false, 0, 0);

//   var normalBuffer = gl.createBuffer();
//   gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
//   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(planetNormals), gl.STATIC_DRAW);
//   gl.enableVertexAttribArray(normalAttributeLocation);
//   gl.vertexAttribPointer(normalAttributeLocation, 3, gl.FLOAT, false, 0, 0);

//   var indexBuffer = gl.createBuffer();
//   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
//   gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(planetIndices), gl.STATIC_DRAW); 

    objects.forEach(function(object) {
      gl.useProgram(object.drawInfo.programInfo);

      var projectionMatrix = utils.multiplyMatrices(viewProjectionMatrix, object.worldMatrix);
      var normalMatrix = utils.invertMatrix(utils.transposeMatrix(object.worldMatrix));

      gl.uniformMatrix4fv(matrixLocation, gl.FALSE, utils.transposeMatrix(projectionMatrix));
      gl.uniformMatrix4fv(vertexMatrixPositionHandle, gl.FALSE, utils.transposeMatrix(object.worldMatrix));
      gl.uniformMatrix4fv(normalMatrixPositionHandle, gl.FALSE, utils.transposeMatrix(normalMatrix));
      gl.uniform3fv(materialDiffColorHandle, materialColor);
      gl.uniform3fv(lightColorHandle,  directionalLightColor);
      gl.uniform3fv(lightDirectionHandle,  directionalLight);
      gl.uniform3fv(materialSpecColorHandle, specularColor);
      gl.uniform1f(materialSpecPowerHandle, specularPower);    
      gl.uniform3fv(eyePositionHandle, observerPosition); 
      // gl.uniformMatrix4fv(matrixLocation, gl.FALSE, utils.transposeMatrix(projectionMatrix)); 

      if(object.textNum < 11){
            gl.uniform1i(textLocation, object.textNum);
      }

      gl.bindVertexArray(vao);
      gl.drawElements(gl.TRIANGLES, planetIndices.length, gl.UNSIGNED_SHORT, 0 );
    });


    
    
    
    window.requestAnimationFrame(drawScene);
  }

}

main();

