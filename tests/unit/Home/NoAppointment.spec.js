import { shallowMount, mount } from "@vue/test-utils";
import Home from "@/views/Home";
import "@testing-library/jest-dom";
import Vue from "vue";

jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: { appointments: [] } }),
}));
describe("Test to Appointm entCard", () => {
  test("If appointments array is empty render messge", async () => {
    const wrapper = mount(Home);
    //await wrapper.vm.$forceUpdate();  Works too
    await Vue.nextTick();
    expect(wrapper.find(".noAppointments").element).toBeVisible();
  });
});
