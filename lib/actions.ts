"use server";

import { supabase } from "./supabase";

export async function submitJoinNetwork(formData: FormData) {
  const organization_name = formData.get("organization_name") as string;
  const sector = formData.get("sector") as string;
  const country = formData.get("country") as string;
  const contact_person = formData.get("contact_person") as string;
  const contact_email = formData.get("contact_email") as string;
  const whatsapp_number = formData.get("whatsapp_number") as string;
  const role_description = formData.get("role_description") as string;
  const selected_role = formData.get("selected_role") as string;

  // Extract all remaining keys as role_specific_data
  const role_specific_data: Record<string, string> = {};
  
  const knownKeys = [
    "organization_name", "sector", "country", "contact_person", 
    "contact_email", "whatsapp_number", "role_description", 
    "selected_role", "company_profile"
  ];

  for (const [key, value] of formData.entries()) {
    if (!knownKeys.includes(key)) {
      if (typeof value === "string" && !key.startsWith("$ACTION")) {
        role_specific_data[key] = value;
      }
    }
  }

  // Handle file upload
  const company_profile = formData.get("company_profile") as File | null;
  if (company_profile && company_profile.size > 0) {
    const fileExt = company_profile.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    
    const { error: uploadError } = await supabase.storage
      .from('company_profiles')
      .upload(fileName, company_profile);
      
    if (!uploadError) {
      const { data: publicUrlData } = supabase.storage
        .from('company_profiles')
        .getPublicUrl(fileName);
      role_specific_data['company_profile_url'] = publicUrlData.publicUrl;
    } else {
      console.error("Storage upload error:", uploadError);
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
        contact_email,
        whatsapp_number,
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
  const Network_type = formData.get("Network_type") as string;
  const sector = formData.get("sector") as string;
  const country_region = formData.get("country_region") as string;
  const contact_person = formData.get("contact_person") as string;
  const contact_email = formData.get("contact_email") as string;
  const whatsapp_number = formData.get("whatsapp_number") as string;
  const program_interest = formData.get("program_interest") as string;
  const capacity_focus = formData.get("capacity_focus") as string;
  const preferred_timeline = formData.get("preferred_timeline") as string;
  const discussion_topics = formData.get("discussion_topics") as string;

  const { error } = await supabase
    .from('strategic_discussion_requests')
    .insert([
      {
        organization_name,
        Network_type,
        sector,
        country_region,
        contact_person,
        contact_email,
        whatsapp_number,
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
