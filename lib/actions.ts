"use server";

import { supabase } from "./supabase";

export async function submitJoinNetwork(formData: FormData) {
  const organization_name = formData.get("organization_name") as string;
  const sector = formData.get("sector") as string;
  const country = formData.get("country") as string;
  const contact_person = formData.get("contact_person") as string;
  const role_description = formData.get("role_description") as string;
  const selected_role = formData.get("selected_role") as string;

  // Extract all remaining keys as role_specific_data
  const role_specific_data: Record<string, string> = {};
  for (const [key, value] of formData.entries()) {
    if (!["organization_name", "sector", "country", "contact_person", "role_description", "selected_role"].includes(key)) {
      if (typeof value === "string" && !key.startsWith("$ACTION")) {
        role_specific_data[key] = value;
      }
    }
  }

  const { error } = await supabase
    .from('join_network_requests')
    .insert([
      {
        organization_name,
        sector,
        country,
        contact_person,
        role_description,
        selected_role,
        role_specific_data
      }
    ]);

  if (error) {
    console.error("Supabase Error:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function submitStrategicDiscussion(formData: FormData) {
  const organization_name = formData.get("organization_name") as string;
  const contact_person = formData.get("contact_person") as string;
  const contact_email = formData.get("contact_email") as string;
  const program_interest = formData.get("program_interest") as string;
  const capacity_focus = formData.get("capacity_focus") as string;
  const preferred_timeline = formData.get("preferred_timeline") as string;
  const discussion_topics = formData.get("discussion_topics") as string;

  const { error } = await supabase
    .from('strategic_discussion_requests')
    .insert([
      {
        organization_name,
        contact_person,
        contact_email,
        program_interest,
        capacity_focus,
        preferred_timeline,
        discussion_topics
      }
    ]);

  if (error) {
    console.error("Supabase Error:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
