{
  description = "Leaderboards Website";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs?ref=nixpkgs-unstable";
  };

  outputs = { self, nixpkgs }: let
    system = "x86_64-linux";
  in
  with nixpkgs.legacyPackages.${system};
  let
    pythonEnv = python38.withPackages(ps: with ps; [
      fastapi
      uvicorn
      pytest
      pip
    ]);
  in
  {
    devShell.${system} = mkShell {
      buildInputs = [
#        nodejs
#        nodePackages.npm
        pythonEnv
      ];

#      PYTHONPATH = "backend";
      PORT = "8600";

      shellHook = ''
      echo
      echo "You can setup the server for developpement by running:"
      echo
      echo -e "    \033[35mstart dev&\033[m"
      echo

      function start() {
        if [ "$1" != "dev" ]
        then
          uvicorn api:api --port $PORT
        else
          DEV=true uvicorn api:api --port $PORT --reload
        fi
      }
      '';
    };
  };
}
