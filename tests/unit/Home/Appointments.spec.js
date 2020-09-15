import { shallowMount, mount } from "@vue/test-utils";
import Home from "@/views/Home";
import "@testing-library/jest-dom";
import Vue from "vue";
import AppointmentCard from "@/components/AppointmentCard/AppointmentCard";

jest.mock("axios", () => ({
  get: () =>
    Promise.resolve({
      data: {
        appointments: [
          {
            area: "Churrasqueira",
            date: "22/10/2020",
            apartament: "503",
            responsible: "Renato",
          },
          {
            area: "Salão de festas",
            date: "15/10/2020",
            apartament: "504",
            responsible: "Simone",
          },
        ],
      },
    }),
}));
describe("Test Axios appointment Card", () => {
  test("If appointments array has elements render components", async () => {
    const wrapper = mount(Home);
    //await wrapper.vm.$forceUpdate();  Works too
    await Vue.nextTick();

    expect(wrapper.findAllComponents(AppointmentCard).length).toBe(2);
  });
});
