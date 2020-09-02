import { MandarineCore } from "https://deno.land/x/mandarinets@v2.0.1/mod.ts";
import { MyController } from "./hello-world/helloWorld.ts";

const controllers = [MyController];
const services = [];
const middleware = [];
const repositories = [];
const configurations = [];
const components = [];
const otherModules = [];

new MandarineCore().MVC().run();
