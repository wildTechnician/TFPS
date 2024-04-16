export * from './define';

export const BORDER_TEXTURE = new URL(
  '../assets/models/scene_collision.glb',
  import.meta.url
).href;

export const CHARACTER_URL = new URL(
  '../assets/models/character.fbx',
  import.meta.url
).href;

export const CHARACTER_WALK_URL = new URL(
  '../assets/animates/Walking_31_k50.fbx',
  import.meta.url
).href;

export const CHARACTER_JUMP_URL = new URL(
  '../assets/animates/Jumping_17_k50.fbx',
  import.meta.url
).href;

export const CHARACTER_RUNNING_URL = new URL(
  '../assets/animates/Run_16_k50.fbx',
  import.meta.url
).href;

export const CHARACTER_IDLE_URL = new URL(
  '../assets/animates/Idle_59_k50.fbx',
  import.meta.url
).href;

export const CHARACTER_BACKWARD_URL = new URL(
  '../assets/animates/Backwards_25_k50.fbx',
  import.meta.url
).href;
