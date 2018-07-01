import './lesson_13.scss';

class Light {
    constructor(target) {
        this.target = target;
        this.lamp = null;
        this.trigger = null;
        this.active = false;
    }

    activate(btn) {
        btn.classList.add('btn-active')
        btn.previousSibling.classList.add('light-active')
        this.active = true;
        btn.textContent = 'OFF';
    }
    deactivate(btn) {
        btn.classList.remove('btn-active')
        btn.previousSibling.classList.remove('light-active')
        this.active = false;
        btn.textContent = 'ON';
    }

    controls(btn) {
        if (!this.active) {
            this.activate(btn);
        }
        else {
            this.deactivate(btn);
        }
    }

    render() {
        this.light = document.createElement('div');
        this.lamp = document.createElement('div');
        this.trigger = document.createElement('div');

        this.light.classList.add('light');
        this.lamp.classList.add('light__lamp');
        this.trigger.classList.add('light__trigger');
        this.trigger.textContent = 'ON';
        this.trigger.addEventListener('click', () => {
            this.controls(this.trigger);
        });

        this.target.appendChild(this.light);
        this.light.appendChild(this.lamp);
        this.light.appendChild(this.trigger);
    }

}

class Controls {
    constructor() {
        this.lights = [];
        this.activeLights = [];
        this.target = document.querySelector('.container');
        this.addBtn = document.querySelector('.add');
        this.toggle = document.querySelector('.toggle');
        this.addBtn.addEventListener('click', () => {
            this.addLight();
        });
        this.toggle.addEventListener('click', () => {
            this.toggleAdd();
        })
        this.target.onmousedown = this.target.onselectstart = () => {
            return false;
        };

    }
    addLight() {
        const newLight = new Light(this.target);
        newLight.render(this.target);
        this.lights.push(newLight);
    }
    toggleAdd() {
        this.activeLights = this.lights.filter((light) => {
            if (light.active === true)
                return light;
        });
        this.activeLights.forEach((light) => {
            light.deactivate(light.trigger);
        })
        if(this.activeLights.length == 0){
            this.lights.forEach((light) => {
                light.activate(light.trigger);
            })
        }
    }
}

const controls = new Controls();