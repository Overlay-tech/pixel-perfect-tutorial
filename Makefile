.PHONY: install
install:
	cd pixel-perfect-native && npm i
	cd pixel-perfect-web && npm i
.PHONY: build
build:
	cd pixel-perfect-native && npm run build
	open pixel-perfect-native/pixel-perfect.sketchplugin